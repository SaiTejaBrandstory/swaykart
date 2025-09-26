export interface InfluencerData {
    id: number;
    username: string;
    followers_count: number;
    verified: boolean;
    upper: string;
    posts_count: number;
    engagement_rate: number;
    top_hashtag: string;
    total_unique_hashtags: number;
    hashtag_diversity: number;
    avg_hashtags_per_post: number;
    category: string;
    categories_combined: string;
    location: string;
    locations_combined: string;
    confidence_level: number;
    credibility_score: number;
    risk_level_value: string;
    risk_level_explanation: string;
    consistency_score: string;
    consistency_evidence: string;
    brand_safety_verification_score: number;
    brand_safety_verification_evidence: string;
    risk_advisory: string;
    pn_content_themes: string;
    pn_engagement_context: string;
    pn_overall_recommendation: string;
    value_proposition: string;
    average_days_between_posts: number;
    influencer_rank: number;
    profile_pic_url_hd?: string;
  }
  
  export interface S3Config {
    baseUrl: string;
    headers: Record<string, string>;
  }