'use client'

import { useState, useEffect, useMemo } from 'react'

interface InfluencerData {
  [key: string]: any; // Allow any column from database
}

interface DatabaseTableProps {
  searchQuery?: string;
  allData?: any[];
  loading?: boolean;
  selectedCategory?: string;
  sortBy?: string;
}

const DatabaseTable: React.FC<DatabaseTableProps> = ({ searchQuery = '', allData = [], loading = false, selectedCategory = 'All Categories', sortBy = 'Ranking' }) => {
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Debug: Log the sortBy prop
  console.log('🎯 DatabaseTable received sortBy:', sortBy);
  // Keep columns in same order regardless of sort
  const columns = [
    'influencer_rank',
    'username', 
    'categories_combined',
    'followers_count',
    'engagement_rate',
    'credibility_score'
  ];
  
  const itemsPerPage = 10;

  // Filter and sort data based on search query, selected category, and sort option
  const filteredData = useMemo(() => {
    console.log('🔍 DatabaseTable - allData length:', allData.length, 'selectedCategory:', selectedCategory, 'searchQuery:', searchQuery);
    let filtered = allData;
    
    // Filter by category first
    if (selectedCategory && selectedCategory !== 'All Categories') {
      filtered = filtered.filter(row => {
        if (!row.categories_combined) return false;
        const categories = row.categories_combined.split(',').map((cat: string) => cat.trim());
        return categories.some((cat: string) => cat === selectedCategory);
      });
    }
    
    // Then filter by search query
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      filtered = filtered.filter(row => 
        row.username?.toLowerCase().includes(searchLower) ||
        row.categories_combined?.toLowerCase().includes(searchLower)
      );
    }
    
    // Sort the filtered data
    console.log('🔍 Sorting by:', sortBy, 'Filtered data length:', filtered.length);
    
    if (sortBy === 'Ranking') {
      filtered = filtered.sort((a, b) => {
        const rankA = parseInt(a.influencer_rank) || 0;
        const rankB = parseInt(b.influencer_rank) || 0;
        return rankA - rankB; // Ascending order (1, 2, 3...)
      });
      console.log('📊 Sorted by Ranking - First 3 ranks:', filtered.slice(0, 3).map(f => ({ rank: f.influencer_rank, username: f.username })));
    } else if (sortBy === 'Followers') {
      filtered = filtered.sort((a, b) => {
        const followersA = parseInt(a.followers_count) || 0;
        const followersB = parseInt(b.followers_count) || 0;
        return followersB - followersA; // Descending order (highest first)
      });
      console.log('📊 Sorted by Followers - First 3 followers:', filtered.slice(0, 3).map(f => ({ followers: f.followers_count, username: f.username })));
    }
    
    return filtered;
  }, [allData, searchQuery, selectedCategory, sortBy]);

  // Paginate filtered data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const result = filteredData.slice(startIndex, endIndex);
    console.log('📄 Paginated data for', sortBy, ':', result.slice(0, 3).map(r => ({ 
      rank: r.influencer_rank, 
      username: r.username, 
      followers: r.followers_count 
    })));
    return result;
  }, [filteredData, currentPage, itemsPerPage, sortBy]);

  // Calculate pagination info
  const pagination = useMemo(() => {
    const total = filteredData.length;
    const totalPages = Math.ceil(total / itemsPerPage);
    
    return {
      page: currentPage,
      limit: itemsPerPage,
      total,
      totalPages,
      hasNext: currentPage < totalPages,
      hasPrev: currentPage > 1
    };
  }, [filteredData.length, currentPage, itemsPerPage]);

  // Reset to first page when search, category, or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FCA311] mx-auto mb-4"></div>
          <p style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '16px',
            color: '#6B7280'
          }}>
            Loading all influencer data...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <div className="text-red-600 mb-2">
          <i className="fa-solid fa-exclamation-triangle text-2xl"></i>
        </div>
        <p style={{
          fontFamily: 'Inter',
          fontWeight: 600,
          fontSize: '16px',
          color: '#DC2626',
          marginBottom: '8px'
        }}>
          Error Loading Data
        </p>
        <p style={{
          fontFamily: 'Inter',
          fontWeight: 400,
          fontSize: '14px',
          color: '#DC2626',
          marginBottom: '16px'
        }}>
          {error}
        </p>
        <div className="text-left bg-white p-4 rounded border">
          <p className="text-sm text-gray-600 mb-2">Debugging steps:</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>1. Check if your database is running and accessible</li>
            <li>2. Verify your .env.local file has correct credentials</li>
            <li>3. Make sure the table &apos;scrapped.influencer_ui&apos; exists</li>
            <li>4. Check the browser console and terminal for detailed errors</li>
            <li>5. Try visiting: <a href="/api/influencers" target="_blank" className="text-blue-600 underline">/api/influencers</a></li>
          </ul>
        </div>
      </div>
    );
  }

  const formatValue = (value: any, column: string, rowData: any) => {
    if (value === null || value === undefined) return 'N/A';

    // Format influencer rank (handle both string and number)
    if (column === 'influencer_rank') {
      const rank = parseInt(value);
      return (
        <div className="flex items-center">
          <span style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: 'clamp(16px, 3vw, 20px)',
            lineHeight: 'clamp(24px, 4vw, 32px)',
            letterSpacing: '0%',
            color: rank <= 3 ? '#FCA311' : '#14213D',
          }}>
            {rank}
          </span>
          {rank <= 3 && (
            <i className="fa-solid fa-crown ml-1 sm:ml-2" style={{ color: '#FCA311', fontSize: 'clamp(14px, 2.5vw, 16px)' }}></i>
          )}
        </div>
      );
    }

    // Format username with verified icon if verified
    if (column === 'username') {
      const isVerified = rowData.verified === true;

      return (
        <div className="flex items-center">
          <span className="text-[#14213D]" style={{
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: 'clamp(14px, 2.5vw, 16px)',
            lineHeight: 'clamp(20px, 3.5vw, 24px)',
            letterSpacing: '0%',
          }}>
            {value}
          </span>
          {isVerified && (
            <svg className="ml-1 flex-shrink-0" style={{ width: 'clamp(12px, 2.5vw, 16px)', height: 'clamp(12px, 2.5vw, 16px)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"></polygon>
              <polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"></polygon>
            </svg>
          )}
        </div>
      );
    }

    // Format followers count with commas
    if (column === 'followers_count') {
      const numValue = typeof value === 'number' ? value : parseFloat(value);
      return (
        <span className="text-[#000000]" style={{
          fontFamily: 'Inter',
          fontWeight: 600,
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          lineHeight: 'clamp(20px, 3.5vw, 24px)',
          letterSpacing: '0%',
        }}>
          {numValue.toLocaleString()}
        </span>
      );
    }

    // Format engagement rate as percentage (handle both string and number)
    if (column === 'engagement_rate') {
      const numValue = parseFloat(value);
      return (
        <span className="text-[#000000]" style={{
          fontFamily: 'Inter',
          fontWeight: 600,
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          lineHeight: 'clamp(20px, 3.5vw, 24px)',
          letterSpacing: '0%',
        }}>
          {numValue.toFixed(1)}%
        </span>
      );
    }

    // Format credibility score (handle both string and number)
    if (column === 'credibility_score') {
      const numValue = parseFloat(value);
      return (
        <span className="text-[#000000]" style={{
          fontFamily: 'Inter',
          fontWeight: 600,
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          lineHeight: 'clamp(20px, 3.5vw, 24px)',
          letterSpacing: '0%',
        }}>
          {numValue.toFixed(1)}
        </span>
      );
    }

    // Format categories with comma separation and tooltip
    if (column === 'categories_combined') {
      const categories = String(value).split(',').map(cat =>
        cat.trim().charAt(0).toUpperCase() + cat.trim().slice(1).toLowerCase()
      );
      
      if (categories.length === 1) {
        return (
          <span className="px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-sm font-medium" style={{
            backgroundColor: '#DBEAFE',
            color: '#14213D',
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: 'clamp(14px, 2vw, 16px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            border: '1px solid #DBEAFE',
          }}>
            {categories[0]}
          </span>
        );
      }

      return (
        <div className="flex items-center gap-1">
          <span className="px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-sm font-medium" style={{
            backgroundColor: '#DBEAFE',
            color: '#14213D',
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: 'clamp(14px, 2vw, 16px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            border: '1px solid #DBEAFE',
          }}>
            {categories[0]}
          </span>
          <div className="relative group">
            <span className="px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-sm font-medium cursor-pointer" style={{
              backgroundColor: '#DBEAFE',
              color: '#14213D',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: 'clamp(14px, 2vw, 16px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              border: '1px solid #DBEAFE',
            }}>
              +{categories.length - 1}
            </span>
            <div className="absolute bottom-full left-0 mb-2 p-2 sm:p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 min-w-max pointer-events-none" style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #14213D',
              boxShadow: '0px 4px 19.1px -2px #00000014'
            }}>
              <div className="flex flex-wrap gap-1 sm:gap-2 max-w-xs">
                {categories.slice(1).map((category, idx) => (
                  <span key={idx} className="px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-sm font-medium text-center whitespace-nowrap" style={{
                    backgroundColor: '#DBEAFE',
                    color: '#14213D',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                  }}>
                    {category}
                  </span>
                ))}
              </div>
              <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent" style={{ borderTopColor: '#14213D' }}></div>
            </div>
          </div>
        </div>
      );
    }

    return String(value);
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 style={{
          fontFamily: 'Inter',
          fontWeight: 600,
          fontSize: 'clamp(18px, 3vw, 20px)',
          lineHeight: 'clamp(24px, 4vw, 28px)',
          letterSpacing: '0%',
          color: '#14213D',
        }}>
          Search result by : {sortBy}
        </h2>
        {pagination && (
          <div style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '14px',
            color: '#6B7280'
          }}>
            Showing {((currentPage - 1) * 10) + 1} to {Math.min(currentPage * 10, pagination.total)} of {pagination.total} records
          </div>
        )}
      </div>

      <div className="overflow-x-auto rounded-xl border border-[#E5E7EB] shadow-sm">
        <table key={sortBy} className="min-w-full divide-y divide-[#E5E7EB]">
            <thead className="bg-[#F9FAFB]">
              <tr>
                {columns.map((column, index) => {
                  const columnHeaders = {
                    'influencer_rank': 'Rank',
                    'username': 'Username',
                    'categories_combined': 'Categories',
                    'followers_count': 'Followers',
                    'engagement_rate': 'Engagement',
                    'credibility_score': 'Credibility Score'
                  };
                  
                  return (
                    <th key={index} scope="col" className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-sm font-medium text-[#374151] tracking-wider" style={{
                      fontFamily: 'Inter',
                      fontWeight: 600,
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      minWidth: '120px'
                    }}>
                      {columnHeaders[column as keyof typeof columnHeaders] || column.replace(/_/g, ' ')}
                    </th>
                  );
                })}
              </tr>
            </thead>
          <tbody key={`tbody-${sortBy}`} className="bg-white divide-y divide-[#E5E7EB]">
            {paginatedData.map((influencer, index) => (
              <tr key={influencer.id || index} className="bg-[#00000000] hover:bg-[#FCA3111A] transition-colors duration-200 cursor-pointer">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap">
                    {formatValue(influencer[column], column, influencer)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {pagination && pagination.totalPages > 1 && (
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-sm text-[#4B5563] order-2 sm:order-1 text-center sm:text-left" style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: 'clamp(14px, 2vw, 16px)',
            lineHeight: 'clamp(16px, 3vw, 20px)',
            letterSpacing: '0%',
          }}>
            Showing {((currentPage - 1) * 10) + 1} to {Math.min(currentPage * 10, pagination.total)} of {pagination.total.toLocaleString()} results
          </p>
          
          {/* Desktop Pagination */}
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px order-1 sm:order-2 hidden sm:flex" aria-label="Pagination">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={!pagination.hasPrev}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-[#E5E7EB] bg-white text-sm font-medium text-[#4B5563] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0%',
              }}
            >
              <span className="sr-only">Previous</span>
              <i className="fa-solid fa-chevron-left mr-1"></i>
              Previous
            </button>
            
            {/* Smart Pagination Logic */}
            {(() => {
              const totalPages = pagination.totalPages;
              const current = currentPage;
              const pages = [];
              
              // Always show first page
              pages.push(1);
              
              // Calculate range around current page
              let startPage = Math.max(2, current - 1);
              let endPage = Math.min(totalPages - 1, current + 1);
              
              // Adjust range if we're near the beginning or end
              if (current <= 3) {
                endPage = Math.min(5, totalPages - 1);
              }
              if (current >= totalPages - 2) {
                startPage = Math.max(2, totalPages - 4);
              }
              
              // Add ellipsis after first page if needed
              if (startPage > 2) {
                pages.push('...');
              }
              
              // Add pages in range
              for (let i = startPage; i <= endPage; i++) {
                if (i !== 1 && i !== totalPages) {
                  pages.push(i);
                }
              }
              
              // Add ellipsis before last page if needed
              if (endPage < totalPages - 1) {
                pages.push('...');
              }
              
              // Always show last page (if more than 1 page)
              if (totalPages > 1) {
                pages.push(totalPages);
              }
              
              return pages.map((page, index) => {
                if (page === '...') {
                  return (
                    <span key={`ellipsis-${index}`} className="relative inline-flex items-center px-4 py-2 border border-[#E5E7EB] bg-white text-sm font-medium text-[#4B5563]">
                      ...
                    </span>
                  );
                }
                
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(Number(page))}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      currentPage === page
                        ? 'z-10 bg-[#14213D] text-white border-[#14213D]'
                        : 'bg-white text-[#4B5563] border-[#E5E7EB] hover:bg-gray-50'
                    }`}
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      lineHeight: '20px',
                      letterSpacing: '0%',
                    }}
                  >
                    {page}
                  </button>
                );
              });
            })()}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(pagination.totalPages, prev + 1))}
              disabled={!pagination.hasNext}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-[#E5E7EB] bg-white text-sm font-medium text-[#4B5563] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0%',
              }}
            >
              Next
              <span className="sr-only">Next</span>
              <i className="fa-solid fa-chevron-right ml-1"></i>
            </button>
          </nav>

          {/* Mobile Pagination */}
          <div className="flex items-center gap-2 sm:hidden order-1">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={!pagination.hasPrev}
              className="px-3 py-2 text-sm font-medium text-[#4B5563] bg-white border border-[#E5E7EB] rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0%',
              }}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <span className="px-3 py-2 text-sm font-medium text-[#14213D] bg-[#F9FAFB] border border-[#E5E7EB] rounded-md" style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              lineHeight: '20px',
              letterSpacing: '0%',
            }}>
              {currentPage} / {pagination.totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(pagination.totalPages, prev + 1))}
              disabled={!pagination.hasNext}
              className="px-3 py-2 text-sm font-medium text-[#4B5563] bg-white border border-[#E5E7EB] rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0%',
              }}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      )}


      {paginatedData.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <i className="fa-solid fa-database text-4xl"></i>
          </div>
          <p style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '16px',
            color: '#6B7280'
          }}>
            {searchQuery ? 'No results found for your search' : 'No data found in the database'}
          </p>
        </div>
      )}
    </div>
  );
};

export default DatabaseTable;
