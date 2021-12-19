import { BlogSliderData } from "../components/blog-slider";
import { CustomerData } from "../components/customer-single";
import { PortfolioSliderData } from "../components/portfolio-slider";
import { ProfessionalExperienceData } from "../components/professional-experience-slider";
import { SocialData } from "../components/social";
import { BlogPostData } from "../components/template/blog";
import { PortfolioData } from "../components/template/portfolio";
import { TestimonialData } from "../components/testimonials-slider";

export const blogPostMapper = (post: any): BlogPostData => {
  return {
    title: post.title || "",
    slug: post.slug || "",
    cover: {
      alternativeText: post.cover?.alternativeText || "",
      url: post.cover?.url || "",
    },
    created_at: post.created_at || "",
    content: post.content || "",
    description: post.description || "",
  };
};
export const portfolioPostMapper = (post: any): PortfolioData => {
  return {
    title: post.title || "",
    slug: post.slug || "",
    cover: {
      alternativeText: post.cover?.alternativeText || "",
      url: post.cover?.url || "",
    },
    category: {
      name: post.category?.name || "",
    },
    created_at: post.created_at || "",
    content: post.content || "",
    description: post.description || "",
  };
};
export const blogPostsMapper = (data: any): BlogPostData[] => {
  return (
    data.blogPosts &&
    data.blogPosts.map((blogPost: BlogPostData): BlogPostData => {
      return {
        title: blogPost.title || "",
        slug: blogPost.slug || "",
        cover: {
          alternativeText: blogPost.cover?.alternativeText || "",
          url: blogPost.cover?.url || "",
        },
        created_at: blogPost.created_at || "",
        content: blogPost.content || "",
        description: blogPost.description || "",
      };
    })
  );
};
export const portfolioMapper = (data: any): PortfolioData[] => {
  return (
    data.portfolios &&
    data.portfolios.map((portfolio: PortfolioData): PortfolioData => {
      return {
        title: portfolio.title || "",
        slug: portfolio.slug || "",
        cover: {
          alternativeText: portfolio.cover?.alternativeText || "",
          url: portfolio.cover?.url || "",
        },
        category: { name: portfolio.category?.name || "" },
        created_at: portfolio.created_at || "",
        content: portfolio.content || "",
        description: portfolio.description || "",
      };
    })
  );
};
export const blogPostForSliderMapper = (data: any): BlogSliderData[] | [] => {
  if (data?.blogPosts) {
    return data.blogPosts.map((blogPost: BlogSliderData) => {
      if (blogPost && blogPost.cover) {
        return {
          title: blogPost.title,
          slug: blogPost.slug,
          cover: {
            alternativeText: blogPost.cover?.alternativeText || "",
            url: blogPost.cover?.url || "",
          },
          created_at: blogPost.created_at,
        };
      }
      return [];
    });
  }
  return [];
};

export const portfolioForSliderMapper = (
  data: any
): PortfolioSliderData[] | [] => {
  if (data?.portfolios) {
    return data.portfolios.map((portfolio: PortfolioSliderData) => {
      if (portfolio && portfolio.cover) {
        return {
          title: portfolio.title,
          slug: portfolio.slug,
          cover: {
            alternativeText: portfolio.cover?.alternativeText || "",
            url: portfolio.cover?.url || "",
          },
          created_at: portfolio.created_at,
        };
      }
      return [];
    });
  }
  return [];
};

export const portfolioSingleMapper = (
  data: any
): PortfolioSliderData[] | [] => {
  if (data?.portfolios) {
    return data.portfolios.map((portfolio: PortfolioSliderData) => {
      if (portfolio && portfolio.cover) {
        return {
          title: portfolio.title,
          slug: portfolio.slug,
          cover: {
            alternativeText: portfolio.cover?.alternativeText || "",
            url: portfolio.cover?.url || "",
          },
          created_at: portfolio.created_at,
        };
      }
      return [];
    });
  }
  return [];
};

export const testimonialsMapper = (data: any): TestimonialData[] | [] => {
  if (data?.testimonials) {
    return data.testimonials.map((testimonial: TestimonialData) => {
      if (testimonial && testimonial.image) {
        return {
          name: testimonial.name,
          message: testimonial.message,
          image: {
            url: testimonial.image.url,
            alternativeText: testimonial.image?.alternativeText || "",
          },
        };
      }
      return [];
    });
  }
  return [];
};

export const professionalExperiencesMapper = (
  data: any
): ProfessionalExperienceData[] | [] => {
  if (data?.professionalExperiences) {
    return data.professionalExperiences.map(
      (experience: ProfessionalExperienceData) => {
        if (experience) {
          return {
            in: experience.in,
            out: experience.out,
            employer: experience.employer,
            job: experience.job,
            description: experience.description,
          };
        }
      }
    );
  }
  return [];
};

export const socialMapper = (data: any): SocialData => {
  return {
    email: data?.socialLink?.email || "",
    instagram: data?.socialLink?.instagram || "",
    facebook: data?.socialLink?.facebook || "",
    whatsapp: data?.socialLink?.whatsapp || "",
    linkedin: data?.socialLink?.linkedin || "",
    medium: data?.socialLink?.medium || "",
  };
};

export const customerMapper = (data: any): CustomerData => {
  return {
    name: data.customer?.name || "",
    logo: {
      alternativeText: data.customer?.logo?.alternativeText || "",
      url: data.customer?.logo?.url || "",
    },
  };
};
