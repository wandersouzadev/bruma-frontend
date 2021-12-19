import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AboutPage = {
  __typename?: "AboutPage";
  SEO?: Maybe<ComponentSeoSeo>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  updated_at: Scalars["DateTime"];
};

export type AboutPageInput = {
  SEO: ComponentSeoSeoInput;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type AdminUser = {
  __typename?: "AdminUser";
  firstname: Scalars["String"];
  id: Scalars["ID"];
  lastname: Scalars["String"];
  username?: Maybe<Scalars["String"]>;
};

export type BlogPage = {
  __typename?: "BlogPage";
  SEO?: Maybe<ComponentSeoSeo>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  updated_at: Scalars["DateTime"];
};

export type BlogPageInput = {
  SEO: ComponentSeoSeoInput;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type BlogPost = {
  __typename?: "BlogPost";
  SEO?: Maybe<ComponentSeoSeo>;
  author?: Maybe<UsersPermissionsUser>;
  content: Scalars["String"];
  cover?: Maybe<UploadFile>;
  created_at: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  published_at?: Maybe<Scalars["DateTime"]>;
  slug: Scalars["String"];
  title: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type BlogPostAggregator = {
  __typename?: "BlogPostAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type BlogPostConnection = {
  __typename?: "BlogPostConnection";
  aggregate?: Maybe<BlogPostAggregator>;
  groupBy?: Maybe<BlogPostGroupBy>;
  values?: Maybe<Array<Maybe<BlogPost>>>;
};

export type BlogPostConnectionAuthor = {
  __typename?: "BlogPostConnectionAuthor";
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type BlogPostConnectionContent = {
  __typename?: "BlogPostConnectionContent";
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type BlogPostConnectionCover = {
  __typename?: "BlogPostConnectionCover";
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type BlogPostConnectionCreated_At = {
  __typename?: "BlogPostConnectionCreated_at";
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type BlogPostConnectionDescription = {
  __typename?: "BlogPostConnectionDescription";
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type BlogPostConnectionId = {
  __typename?: "BlogPostConnectionId";
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type BlogPostConnectionPublished_At = {
  __typename?: "BlogPostConnectionPublished_at";
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type BlogPostConnectionSeo = {
  __typename?: "BlogPostConnectionSEO";
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type BlogPostConnectionSlug = {
  __typename?: "BlogPostConnectionSlug";
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type BlogPostConnectionTitle = {
  __typename?: "BlogPostConnectionTitle";
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type BlogPostConnectionUpdated_At = {
  __typename?: "BlogPostConnectionUpdated_at";
  connection?: Maybe<BlogPostConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type BlogPostGroupBy = {
  __typename?: "BlogPostGroupBy";
  SEO?: Maybe<Array<Maybe<BlogPostConnectionSeo>>>;
  author?: Maybe<Array<Maybe<BlogPostConnectionAuthor>>>;
  content?: Maybe<Array<Maybe<BlogPostConnectionContent>>>;
  cover?: Maybe<Array<Maybe<BlogPostConnectionCover>>>;
  created_at?: Maybe<Array<Maybe<BlogPostConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<BlogPostConnectionDescription>>>;
  id?: Maybe<Array<Maybe<BlogPostConnectionId>>>;
  published_at?: Maybe<Array<Maybe<BlogPostConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<BlogPostConnectionSlug>>>;
  title?: Maybe<Array<Maybe<BlogPostConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<BlogPostConnectionUpdated_At>>>;
};

export type BlogPostInput = {
  SEO: ComponentSeoSeoInput;
  author?: Maybe<Scalars["ID"]>;
  content: Scalars["String"];
  cover?: Maybe<Scalars["ID"]>;
  created_by?: Maybe<Scalars["ID"]>;
  description?: Maybe<Scalars["String"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
  slug: Scalars["String"];
  title: Scalars["String"];
  updated_by?: Maybe<Scalars["ID"]>;
};

export type Category = {
  __typename?: "Category";
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  name: Scalars["String"];
  portfolios?: Maybe<Array<Maybe<Portfolio>>>;
  slug: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type CategoryPortfoliosArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type CategoryAggregator = {
  __typename?: "CategoryAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type CategoryConnection = {
  __typename?: "CategoryConnection";
  aggregate?: Maybe<CategoryAggregator>;
  groupBy?: Maybe<CategoryGroupBy>;
  values?: Maybe<Array<Maybe<Category>>>;
};

export type CategoryConnectionCreated_At = {
  __typename?: "CategoryConnectionCreated_at";
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type CategoryConnectionId = {
  __typename?: "CategoryConnectionId";
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type CategoryConnectionName = {
  __typename?: "CategoryConnectionName";
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type CategoryConnectionSlug = {
  __typename?: "CategoryConnectionSlug";
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type CategoryConnectionUpdated_At = {
  __typename?: "CategoryConnectionUpdated_at";
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type CategoryGroupBy = {
  __typename?: "CategoryGroupBy";
  created_at?: Maybe<Array<Maybe<CategoryConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<CategoryConnectionId>>>;
  name?: Maybe<Array<Maybe<CategoryConnectionName>>>;
  slug?: Maybe<Array<Maybe<CategoryConnectionSlug>>>;
  updated_at?: Maybe<Array<Maybe<CategoryConnectionUpdated_At>>>;
};

export type CategoryInput = {
  created_by?: Maybe<Scalars["ID"]>;
  name: Scalars["String"];
  portfolios?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  slug: Scalars["String"];
  updated_by?: Maybe<Scalars["ID"]>;
};

export type ComponentSeoOgTwitter = {
  __typename?: "ComponentSeoOgTwitter";
  card_type?: Maybe<Scalars["String"]>;
  handle?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  site?: Maybe<Scalars["String"]>;
};

export type ComponentSeoOgTwitterInput = {
  card_type?: Maybe<Scalars["String"]>;
  handle?: Maybe<Scalars["String"]>;
  site?: Maybe<Scalars["String"]>;
};

export type ComponentSeoOpenGraph = {
  __typename?: "ComponentSeoOpenGraph";
  id: Scalars["ID"];
  images?: Maybe<Array<Maybe<ComponentSeoOpenGraphImage>>>;
  locale?: Maybe<Scalars["String"]>;
  site_name?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type ComponentSeoOpenGraphImage = {
  __typename?: "ComponentSeoOpenGraphImage";
  alt?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  url?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type ComponentSeoOpenGraphImageInput = {
  alt?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  url?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type ComponentSeoOpenGraphInput = {
  images?: Maybe<Array<Maybe<ComponentSeoOpenGraphImageInput>>>;
  locale?: Maybe<Scalars["String"]>;
  site_name?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type ComponentSeoSeo = {
  __typename?: "ComponentSeoSeo";
  description: Scalars["String"];
  id: Scalars["ID"];
  keywords: Scalars["String"];
  preventIndex?: Maybe<Scalars["Boolean"]>;
  title: Scalars["String"];
};

export type ComponentSeoSeoInput = {
  description: Scalars["String"];
  keywords: Scalars["String"];
  preventIndex?: Maybe<Scalars["Boolean"]>;
  title: Scalars["String"];
};

export type ComponentSocialSocial = {
  __typename?: "ComponentSocialSocial";
  id: Scalars["ID"];
  text: Scalars["String"];
  url: Scalars["String"];
};

export type ComponentSocialSocialInput = {
  text: Scalars["String"];
  url: Scalars["String"];
};

export type ContactPage = {
  __typename?: "ContactPage";
  SEO?: Maybe<ComponentSeoSeo>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  updated_at: Scalars["DateTime"];
};

export type ContactPageInput = {
  SEO: ComponentSeoSeoInput;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type Customer = {
  __typename?: "Customer";
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  logo?: Maybe<UploadFile>;
  name: Scalars["String"];
  posts_de_portfolios?: Maybe<Array<Maybe<Portfolio>>>;
  updated_at: Scalars["DateTime"];
};

export type CustomerPosts_De_PortfoliosArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type CustomerAggregator = {
  __typename?: "CustomerAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type CustomerConnection = {
  __typename?: "CustomerConnection";
  aggregate?: Maybe<CustomerAggregator>;
  groupBy?: Maybe<CustomerGroupBy>;
  values?: Maybe<Array<Maybe<Customer>>>;
};

export type CustomerConnectionCreated_At = {
  __typename?: "CustomerConnectionCreated_at";
  connection?: Maybe<CustomerConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type CustomerConnectionId = {
  __typename?: "CustomerConnectionId";
  connection?: Maybe<CustomerConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type CustomerConnectionLogo = {
  __typename?: "CustomerConnectionLogo";
  connection?: Maybe<CustomerConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type CustomerConnectionName = {
  __typename?: "CustomerConnectionName";
  connection?: Maybe<CustomerConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type CustomerConnectionUpdated_At = {
  __typename?: "CustomerConnectionUpdated_at";
  connection?: Maybe<CustomerConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type CustomerGroupBy = {
  __typename?: "CustomerGroupBy";
  created_at?: Maybe<Array<Maybe<CustomerConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<CustomerConnectionId>>>;
  logo?: Maybe<Array<Maybe<CustomerConnectionLogo>>>;
  name?: Maybe<Array<Maybe<CustomerConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<CustomerConnectionUpdated_At>>>;
};

export type CustomerInput = {
  created_by?: Maybe<Scalars["ID"]>;
  logo?: Maybe<Scalars["ID"]>;
  name: Scalars["String"];
  posts_de_portfolios?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type DefaultSeo = {
  __typename?: "DefaultSeo";
  OG?: Maybe<ComponentSeoOpenGraph>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  title_template?: Maybe<Scalars["String"]>;
  twitter?: Maybe<ComponentSeoOgTwitter>;
  updated_at: Scalars["DateTime"];
};

export type DefaultSeoInput = {
  OG?: Maybe<ComponentSeoOpenGraphInput>;
  created_by?: Maybe<Scalars["ID"]>;
  title_template?: Maybe<Scalars["String"]>;
  twitter?: Maybe<ComponentSeoOgTwitterInput>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type FileInfoInput = {
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type FileInput = {
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  created_by?: Maybe<Scalars["ID"]>;
  ext?: Maybe<Scalars["String"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  height?: Maybe<Scalars["Int"]>;
  mime: Scalars["String"];
  name: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  size: Scalars["Float"];
  updated_by?: Maybe<Scalars["ID"]>;
  url: Scalars["String"];
  width?: Maybe<Scalars["Int"]>;
};

export type HomePage = {
  __typename?: "HomePage";
  SEO?: Maybe<ComponentSeoSeo>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  updated_at: Scalars["DateTime"];
};

export type HomePageInput = {
  SEO: ComponentSeoSeoInput;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type I18NLocale = {
  __typename?: "I18NLocale";
  code?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
};

export type InputId = {
  id: Scalars["ID"];
};

export type JournalisticPage = {
  __typename?: "JournalisticPage";
  SEO?: Maybe<ComponentSeoSeo>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  text: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type JournalisticPageInput = {
  SEO: ComponentSeoSeoInput;
  created_by?: Maybe<Scalars["ID"]>;
  text: Scalars["String"];
  updated_by?: Maybe<Scalars["ID"]>;
};

export type LocaleInput = {
  code?: Maybe<Scalars["String"]>;
  created_by?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type Morph =
  | AboutPage
  | BlogPage
  | BlogPost
  | BlogPostAggregator
  | BlogPostConnection
  | BlogPostConnectionAuthor
  | BlogPostConnectionContent
  | BlogPostConnectionCover
  | BlogPostConnectionCreated_At
  | BlogPostConnectionDescription
  | BlogPostConnectionId
  | BlogPostConnectionPublished_At
  | BlogPostConnectionSeo
  | BlogPostConnectionSlug
  | BlogPostConnectionTitle
  | BlogPostConnectionUpdated_At
  | BlogPostGroupBy
  | Category
  | CategoryAggregator
  | CategoryConnection
  | CategoryConnectionCreated_At
  | CategoryConnectionId
  | CategoryConnectionName
  | CategoryConnectionSlug
  | CategoryConnectionUpdated_At
  | CategoryGroupBy
  | ComponentSeoOgTwitter
  | ComponentSeoOpenGraph
  | ComponentSeoOpenGraphImage
  | ComponentSeoSeo
  | ComponentSocialSocial
  | ContactPage
  | Customer
  | CustomerAggregator
  | CustomerConnection
  | CustomerConnectionCreated_At
  | CustomerConnectionId
  | CustomerConnectionLogo
  | CustomerConnectionName
  | CustomerConnectionUpdated_At
  | CustomerGroupBy
  | DefaultSeo
  | HomePage
  | I18NLocale
  | JournalisticPage
  | Portfolio
  | PortfolioAggregator
  | PortfolioConnection
  | PortfolioConnectionCategory
  | PortfolioConnectionContent
  | PortfolioConnectionCover
  | PortfolioConnectionCreated_At
  | PortfolioConnectionCustomer
  | PortfolioConnectionDescription
  | PortfolioConnectionId
  | PortfolioConnectionPublished_At
  | PortfolioConnectionSeo
  | PortfolioConnectionSlug
  | PortfolioConnectionTitle
  | PortfolioConnectionUpdated_At
  | PortfolioGroupBy
  | PortfolioPage
  | ProfessionalExperiences
  | ProfessionalExperiencesAggregator
  | ProfessionalExperiencesConnection
  | ProfessionalExperiencesConnectionCreated_At
  | ProfessionalExperiencesConnectionDescription
  | ProfessionalExperiencesConnectionEmployer
  | ProfessionalExperiencesConnectionId
  | ProfessionalExperiencesConnectionIn
  | ProfessionalExperiencesConnectionJob
  | ProfessionalExperiencesConnectionOut
  | ProfessionalExperiencesConnectionUpdated_At
  | ProfessionalExperiencesGroupBy
  | PublicityPage
  | SocialLinks
  | Testimonial
  | TestimonialAggregator
  | TestimonialConnection
  | TestimonialConnectionCreated_At
  | TestimonialConnectionId
  | TestimonialConnectionImage
  | TestimonialConnectionMessage
  | TestimonialConnectionName
  | TestimonialConnectionUpdated_At
  | TestimonialGroupBy
  | UploadFile
  | UploadFileAggregator
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMax
  | UploadFileAggregatorMin
  | UploadFileAggregatorSum
  | UploadFileConnection
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionCreated_At
  | UploadFileConnectionExt
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionHeight
  | UploadFileConnectionId
  | UploadFileConnectionMime
  | UploadFileConnectionName
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | UploadFileConnectionSize
  | UploadFileConnectionUpdated_At
  | UploadFileConnectionUrl
  | UploadFileConnectionWidth
  | UploadFileGroupBy
  | UserPermissionsPasswordPayload
  | UsersPermissionsLoginPayload
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionType
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsUser
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserConnection
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionCreated_At
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionUpdated_At
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserGroupBy
  | CreateBlogPostPayload
  | CreateCategoryPayload
  | CreateCustomerPayload
  | CreatePortfolioPayload
  | CreateProfessionalExperiencePayload
  | CreateRolePayload
  | CreateTestimonialPayload
  | CreateUserPayload
  | DeleteAboutPagePayload
  | DeleteBlogPagePayload
  | DeleteBlogPostPayload
  | DeleteCategoryPayload
  | DeleteContactPagePayload
  | DeleteCustomerPayload
  | DeleteDefaultSeoPayload
  | DeleteFilePayload
  | DeleteHomePagePayload
  | DeleteJournalisticPagePayload
  | DeletePortfolioPagePayload
  | DeletePortfolioPayload
  | DeleteProfessionalExperiencePayload
  | DeletePublicityPagePayload
  | DeleteRolePayload
  | DeleteSocialLinkPayload
  | DeleteTestimonialPayload
  | DeleteUserPayload
  | UpdateAboutPagePayload
  | UpdateBlogPagePayload
  | UpdateBlogPostPayload
  | UpdateCategoryPayload
  | UpdateContactPagePayload
  | UpdateCustomerPayload
  | UpdateDefaultSeoPayload
  | UpdateHomePagePayload
  | UpdateJournalisticPagePayload
  | UpdatePortfolioPagePayload
  | UpdatePortfolioPayload
  | UpdateProfessionalExperiencePayload
  | UpdatePublicityPagePayload
  | UpdateRolePayload
  | UpdateSocialLinkPayload
  | UpdateTestimonialPayload
  | UpdateUserPayload;

export type Mutation = {
  __typename?: "Mutation";
  createBlogPost?: Maybe<CreateBlogPostPayload>;
  createCategory?: Maybe<CreateCategoryPayload>;
  createCustomer?: Maybe<CreateCustomerPayload>;
  createPortfolio?: Maybe<CreatePortfolioPayload>;
  createProfessionalExperience?: Maybe<CreateProfessionalExperiencePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  createTestimonial?: Maybe<CreateTestimonialPayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  deleteAboutPage?: Maybe<DeleteAboutPagePayload>;
  deleteBlogPage?: Maybe<DeleteBlogPagePayload>;
  deleteBlogPost?: Maybe<DeleteBlogPostPayload>;
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  deleteContactPage?: Maybe<DeleteContactPagePayload>;
  deleteCustomer?: Maybe<DeleteCustomerPayload>;
  deleteDefaultSeo?: Maybe<DeleteDefaultSeoPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteHomePage?: Maybe<DeleteHomePagePayload>;
  deleteJournalisticPage?: Maybe<DeleteJournalisticPagePayload>;
  deletePortfolio?: Maybe<DeletePortfolioPayload>;
  deletePortfolioPage?: Maybe<DeletePortfolioPagePayload>;
  deleteProfessionalExperience?: Maybe<DeleteProfessionalExperiencePayload>;
  deletePublicityPage?: Maybe<DeletePublicityPagePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteSocialLink?: Maybe<DeleteSocialLinkPayload>;
  deleteTestimonial?: Maybe<DeleteTestimonialPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutPage?: Maybe<UpdateAboutPagePayload>;
  updateBlogPage?: Maybe<UpdateBlogPagePayload>;
  updateBlogPost?: Maybe<UpdateBlogPostPayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  updateContactPage?: Maybe<UpdateContactPagePayload>;
  updateCustomer?: Maybe<UpdateCustomerPayload>;
  updateDefaultSeo?: Maybe<UpdateDefaultSeoPayload>;
  updateFileInfo: UploadFile;
  updateHomePage?: Maybe<UpdateHomePagePayload>;
  updateJournalisticPage?: Maybe<UpdateJournalisticPagePayload>;
  updatePortfolio?: Maybe<UpdatePortfolioPayload>;
  updatePortfolioPage?: Maybe<UpdatePortfolioPagePayload>;
  updateProfessionalExperience?: Maybe<UpdateProfessionalExperiencePayload>;
  updatePublicityPage?: Maybe<UpdatePublicityPagePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  updateSocialLink?: Maybe<UpdateSocialLinkPayload>;
  updateTestimonial?: Maybe<UpdateTestimonialPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};

export type MutationCreateBlogPostArgs = {
  input?: Maybe<CreateBlogPostInput>;
};

export type MutationCreateCategoryArgs = {
  input?: Maybe<CreateCategoryInput>;
};

export type MutationCreateCustomerArgs = {
  input?: Maybe<CreateCustomerInput>;
};

export type MutationCreatePortfolioArgs = {
  input?: Maybe<CreatePortfolioInput>;
};

export type MutationCreateProfessionalExperienceArgs = {
  input?: Maybe<CreateProfessionalExperienceInput>;
};

export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};

export type MutationCreateTestimonialArgs = {
  input?: Maybe<CreateTestimonialInput>;
};

export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};

export type MutationDeleteBlogPostArgs = {
  input?: Maybe<DeleteBlogPostInput>;
};

export type MutationDeleteCategoryArgs = {
  input?: Maybe<DeleteCategoryInput>;
};

export type MutationDeleteCustomerArgs = {
  input?: Maybe<DeleteCustomerInput>;
};

export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};

export type MutationDeletePortfolioArgs = {
  input?: Maybe<DeletePortfolioInput>;
};

export type MutationDeleteProfessionalExperienceArgs = {
  input?: Maybe<DeleteProfessionalExperienceInput>;
};

export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};

export type MutationDeleteTestimonialArgs = {
  input?: Maybe<DeleteTestimonialInput>;
};

export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"];
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: Maybe<Scalars["String"]>;
  files: Array<Maybe<Scalars["Upload"]>>;
  ref?: Maybe<Scalars["String"]>;
  refId?: Maybe<Scalars["ID"]>;
  source?: Maybe<Scalars["String"]>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationResetPasswordArgs = {
  code: Scalars["String"];
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
};

export type MutationUpdateAboutPageArgs = {
  input?: Maybe<UpdateAboutPageInput>;
};

export type MutationUpdateBlogPageArgs = {
  input?: Maybe<UpdateBlogPageInput>;
};

export type MutationUpdateBlogPostArgs = {
  input?: Maybe<UpdateBlogPostInput>;
};

export type MutationUpdateCategoryArgs = {
  input?: Maybe<UpdateCategoryInput>;
};

export type MutationUpdateContactPageArgs = {
  input?: Maybe<UpdateContactPageInput>;
};

export type MutationUpdateCustomerArgs = {
  input?: Maybe<UpdateCustomerInput>;
};

export type MutationUpdateDefaultSeoArgs = {
  input?: Maybe<UpdateDefaultSeoInput>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"];
  info: FileInfoInput;
};

export type MutationUpdateHomePageArgs = {
  input?: Maybe<UpdateHomePageInput>;
};

export type MutationUpdateJournalisticPageArgs = {
  input?: Maybe<UpdateJournalisticPageInput>;
};

export type MutationUpdatePortfolioArgs = {
  input?: Maybe<UpdatePortfolioInput>;
};

export type MutationUpdatePortfolioPageArgs = {
  input?: Maybe<UpdatePortfolioPageInput>;
};

export type MutationUpdateProfessionalExperienceArgs = {
  input?: Maybe<UpdateProfessionalExperienceInput>;
};

export type MutationUpdatePublicityPageArgs = {
  input?: Maybe<UpdatePublicityPageInput>;
};

export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};

export type MutationUpdateSocialLinkArgs = {
  input?: Maybe<UpdateSocialLinkInput>;
};

export type MutationUpdateTestimonialArgs = {
  input?: Maybe<UpdateTestimonialInput>;
};

export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};

export type MutationUploadArgs = {
  field?: Maybe<Scalars["String"]>;
  file: Scalars["Upload"];
  info?: Maybe<FileInfoInput>;
  ref?: Maybe<Scalars["String"]>;
  refId?: Maybe<Scalars["ID"]>;
  source?: Maybe<Scalars["String"]>;
};

export type Portfolio = {
  __typename?: "Portfolio";
  SEO?: Maybe<ComponentSeoSeo>;
  category?: Maybe<Category>;
  content: Scalars["String"];
  cover?: Maybe<UploadFile>;
  created_at: Scalars["DateTime"];
  customer?: Maybe<Customer>;
  description: Scalars["String"];
  id: Scalars["ID"];
  published_at?: Maybe<Scalars["DateTime"]>;
  slug: Scalars["String"];
  title: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type PortfolioAggregator = {
  __typename?: "PortfolioAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type PortfolioConnection = {
  __typename?: "PortfolioConnection";
  aggregate?: Maybe<PortfolioAggregator>;
  groupBy?: Maybe<PortfolioGroupBy>;
  values?: Maybe<Array<Maybe<Portfolio>>>;
};

export type PortfolioConnectionCategory = {
  __typename?: "PortfolioConnectionCategory";
  connection?: Maybe<PortfolioConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type PortfolioConnectionContent = {
  __typename?: "PortfolioConnectionContent";
  connection?: Maybe<PortfolioConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type PortfolioConnectionCover = {
  __typename?: "PortfolioConnectionCover";
  connection?: Maybe<PortfolioConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type PortfolioConnectionCreated_At = {
  __typename?: "PortfolioConnectionCreated_at";
  connection?: Maybe<PortfolioConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type PortfolioConnectionCustomer = {
  __typename?: "PortfolioConnectionCustomer";
  connection?: Maybe<PortfolioConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type PortfolioConnectionDescription = {
  __typename?: "PortfolioConnectionDescription";
  connection?: Maybe<PortfolioConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type PortfolioConnectionId = {
  __typename?: "PortfolioConnectionId";
  connection?: Maybe<PortfolioConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type PortfolioConnectionPublished_At = {
  __typename?: "PortfolioConnectionPublished_at";
  connection?: Maybe<PortfolioConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type PortfolioConnectionSeo = {
  __typename?: "PortfolioConnectionSEO";
  connection?: Maybe<PortfolioConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type PortfolioConnectionSlug = {
  __typename?: "PortfolioConnectionSlug";
  connection?: Maybe<PortfolioConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type PortfolioConnectionTitle = {
  __typename?: "PortfolioConnectionTitle";
  connection?: Maybe<PortfolioConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type PortfolioConnectionUpdated_At = {
  __typename?: "PortfolioConnectionUpdated_at";
  connection?: Maybe<PortfolioConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type PortfolioGroupBy = {
  __typename?: "PortfolioGroupBy";
  SEO?: Maybe<Array<Maybe<PortfolioConnectionSeo>>>;
  category?: Maybe<Array<Maybe<PortfolioConnectionCategory>>>;
  content?: Maybe<Array<Maybe<PortfolioConnectionContent>>>;
  cover?: Maybe<Array<Maybe<PortfolioConnectionCover>>>;
  created_at?: Maybe<Array<Maybe<PortfolioConnectionCreated_At>>>;
  customer?: Maybe<Array<Maybe<PortfolioConnectionCustomer>>>;
  description?: Maybe<Array<Maybe<PortfolioConnectionDescription>>>;
  id?: Maybe<Array<Maybe<PortfolioConnectionId>>>;
  published_at?: Maybe<Array<Maybe<PortfolioConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<PortfolioConnectionSlug>>>;
  title?: Maybe<Array<Maybe<PortfolioConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<PortfolioConnectionUpdated_At>>>;
};

export type PortfolioInput = {
  SEO: ComponentSeoSeoInput;
  category?: Maybe<Scalars["ID"]>;
  content: Scalars["String"];
  cover?: Maybe<Scalars["ID"]>;
  created_by?: Maybe<Scalars["ID"]>;
  customer?: Maybe<Scalars["ID"]>;
  description: Scalars["String"];
  published_at?: Maybe<Scalars["DateTime"]>;
  slug: Scalars["String"];
  title: Scalars["String"];
  updated_by?: Maybe<Scalars["ID"]>;
};

export type PortfolioPage = {
  __typename?: "PortfolioPage";
  SEO?: Maybe<ComponentSeoSeo>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  updated_at: Scalars["DateTime"];
};

export type PortfolioPageInput = {
  SEO: ComponentSeoSeoInput;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type ProfessionalExperienceInput = {
  created_by?: Maybe<Scalars["ID"]>;
  description: Scalars["String"];
  employer: Scalars["String"];
  in: Scalars["Date"];
  job: Scalars["String"];
  out: Scalars["Date"];
  updated_by?: Maybe<Scalars["ID"]>;
};

export type ProfessionalExperiences = {
  __typename?: "ProfessionalExperiences";
  created_at: Scalars["DateTime"];
  description: Scalars["String"];
  employer: Scalars["String"];
  id: Scalars["ID"];
  in: Scalars["Date"];
  job: Scalars["String"];
  out: Scalars["Date"];
  updated_at: Scalars["DateTime"];
};

export type ProfessionalExperiencesAggregator = {
  __typename?: "ProfessionalExperiencesAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type ProfessionalExperiencesConnection = {
  __typename?: "ProfessionalExperiencesConnection";
  aggregate?: Maybe<ProfessionalExperiencesAggregator>;
  groupBy?: Maybe<ProfessionalExperiencesGroupBy>;
  values?: Maybe<Array<Maybe<ProfessionalExperiences>>>;
};

export type ProfessionalExperiencesConnectionCreated_At = {
  __typename?: "ProfessionalExperiencesConnectionCreated_at";
  connection?: Maybe<ProfessionalExperiencesConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type ProfessionalExperiencesConnectionDescription = {
  __typename?: "ProfessionalExperiencesConnectionDescription";
  connection?: Maybe<ProfessionalExperiencesConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type ProfessionalExperiencesConnectionEmployer = {
  __typename?: "ProfessionalExperiencesConnectionEmployer";
  connection?: Maybe<ProfessionalExperiencesConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type ProfessionalExperiencesConnectionId = {
  __typename?: "ProfessionalExperiencesConnectionId";
  connection?: Maybe<ProfessionalExperiencesConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type ProfessionalExperiencesConnectionIn = {
  __typename?: "ProfessionalExperiencesConnectionIn";
  connection?: Maybe<ProfessionalExperiencesConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type ProfessionalExperiencesConnectionJob = {
  __typename?: "ProfessionalExperiencesConnectionJob";
  connection?: Maybe<ProfessionalExperiencesConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type ProfessionalExperiencesConnectionOut = {
  __typename?: "ProfessionalExperiencesConnectionOut";
  connection?: Maybe<ProfessionalExperiencesConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type ProfessionalExperiencesConnectionUpdated_At = {
  __typename?: "ProfessionalExperiencesConnectionUpdated_at";
  connection?: Maybe<ProfessionalExperiencesConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type ProfessionalExperiencesGroupBy = {
  __typename?: "ProfessionalExperiencesGroupBy";
  created_at?: Maybe<Array<Maybe<ProfessionalExperiencesConnectionCreated_At>>>;
  description?: Maybe<
    Array<Maybe<ProfessionalExperiencesConnectionDescription>>
  >;
  employer?: Maybe<Array<Maybe<ProfessionalExperiencesConnectionEmployer>>>;
  id?: Maybe<Array<Maybe<ProfessionalExperiencesConnectionId>>>;
  in?: Maybe<Array<Maybe<ProfessionalExperiencesConnectionIn>>>;
  job?: Maybe<Array<Maybe<ProfessionalExperiencesConnectionJob>>>;
  out?: Maybe<Array<Maybe<ProfessionalExperiencesConnectionOut>>>;
  updated_at?: Maybe<Array<Maybe<ProfessionalExperiencesConnectionUpdated_At>>>;
};

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

export type PublicityPage = {
  __typename?: "PublicityPage";
  SEO?: Maybe<ComponentSeoSeo>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  text: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type PublicityPageInput = {
  SEO: ComponentSeoSeoInput;
  created_by?: Maybe<Scalars["ID"]>;
  text: Scalars["String"];
  updated_by?: Maybe<Scalars["ID"]>;
};

export type Query = {
  __typename?: "Query";
  aboutPage?: Maybe<AboutPage>;
  blogPage?: Maybe<BlogPage>;
  blogPost?: Maybe<BlogPost>;
  blogPosts?: Maybe<Array<Maybe<BlogPost>>>;
  blogPostsConnection?: Maybe<BlogPostConnection>;
  categories?: Maybe<Array<Maybe<Category>>>;
  categoriesConnection?: Maybe<CategoryConnection>;
  category?: Maybe<Category>;
  contactPage?: Maybe<ContactPage>;
  customer?: Maybe<Customer>;
  customers?: Maybe<Array<Maybe<Customer>>>;
  customersConnection?: Maybe<CustomerConnection>;
  defaultSeo?: Maybe<DefaultSeo>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  homePage?: Maybe<HomePage>;
  journalisticPage?: Maybe<JournalisticPage>;
  me?: Maybe<UsersPermissionsMe>;
  portfolio?: Maybe<Portfolio>;
  portfolioPage?: Maybe<PortfolioPage>;
  portfolios?: Maybe<Array<Maybe<Portfolio>>>;
  portfoliosConnection?: Maybe<PortfolioConnection>;
  professionalExperience?: Maybe<ProfessionalExperiences>;
  professionalExperiences?: Maybe<Array<Maybe<ProfessionalExperiences>>>;
  professionalExperiencesConnection?: Maybe<ProfessionalExperiencesConnection>;
  publicityPage?: Maybe<PublicityPage>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  socialLink?: Maybe<SocialLinks>;
  testimonial?: Maybe<Testimonial>;
  testimonials?: Maybe<Array<Maybe<Testimonial>>>;
  testimonialsConnection?: Maybe<TestimonialConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};

export type QueryAboutPageArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryBlogPageArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryBlogPostArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryBlogPostsArgs = {
  limit?: Maybe<Scalars["Int"]>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryBlogPostsConnectionArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryCategoriesArgs = {
  limit?: Maybe<Scalars["Int"]>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryCategoriesConnectionArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryCategoryArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryContactPageArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryCustomerArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryCustomersArgs = {
  limit?: Maybe<Scalars["Int"]>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryCustomersConnectionArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryDefaultSeoArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryFilesArgs = {
  limit?: Maybe<Scalars["Int"]>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryFilesConnectionArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryHomePageArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryJournalisticPageArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryPortfolioArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryPortfolioPageArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryPortfoliosArgs = {
  limit?: Maybe<Scalars["Int"]>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryPortfoliosConnectionArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryProfessionalExperienceArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryProfessionalExperiencesArgs = {
  limit?: Maybe<Scalars["Int"]>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryProfessionalExperiencesConnectionArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryPublicityPageArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryRoleArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryRolesArgs = {
  limit?: Maybe<Scalars["Int"]>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryRolesConnectionArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QuerySocialLinkArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryTestimonialArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryTestimonialsArgs = {
  limit?: Maybe<Scalars["Int"]>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryTestimonialsConnectionArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryUsersArgs = {
  limit?: Maybe<Scalars["Int"]>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryUsersConnectionArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type RoleInput = {
  created_by?: Maybe<Scalars["ID"]>;
  description?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  permissions?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  type?: Maybe<Scalars["String"]>;
  updated_by?: Maybe<Scalars["ID"]>;
  users?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type SocialLinkInput = {
  created_by?: Maybe<Scalars["ID"]>;
  email?: Maybe<ComponentSocialSocialInput>;
  facebook: ComponentSocialSocialInput;
  instagram: ComponentSocialSocialInput;
  linkedin: ComponentSocialSocialInput;
  medium: ComponentSocialSocialInput;
  updated_by?: Maybe<Scalars["ID"]>;
  whatsapp: ComponentSocialSocialInput;
};

export type SocialLinks = {
  __typename?: "SocialLinks";
  created_at: Scalars["DateTime"];
  email?: Maybe<ComponentSocialSocial>;
  facebook?: Maybe<ComponentSocialSocial>;
  id: Scalars["ID"];
  instagram?: Maybe<ComponentSocialSocial>;
  linkedin?: Maybe<ComponentSocialSocial>;
  medium?: Maybe<ComponentSocialSocial>;
  updated_at: Scalars["DateTime"];
  whatsapp?: Maybe<ComponentSocialSocial>;
};

export type Testimonial = {
  __typename?: "Testimonial";
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  image?: Maybe<UploadFile>;
  message: Scalars["String"];
  name: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type TestimonialAggregator = {
  __typename?: "TestimonialAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type TestimonialConnection = {
  __typename?: "TestimonialConnection";
  aggregate?: Maybe<TestimonialAggregator>;
  groupBy?: Maybe<TestimonialGroupBy>;
  values?: Maybe<Array<Maybe<Testimonial>>>;
};

export type TestimonialConnectionCreated_At = {
  __typename?: "TestimonialConnectionCreated_at";
  connection?: Maybe<TestimonialConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type TestimonialConnectionId = {
  __typename?: "TestimonialConnectionId";
  connection?: Maybe<TestimonialConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type TestimonialConnectionImage = {
  __typename?: "TestimonialConnectionImage";
  connection?: Maybe<TestimonialConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type TestimonialConnectionMessage = {
  __typename?: "TestimonialConnectionMessage";
  connection?: Maybe<TestimonialConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type TestimonialConnectionName = {
  __typename?: "TestimonialConnectionName";
  connection?: Maybe<TestimonialConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type TestimonialConnectionUpdated_At = {
  __typename?: "TestimonialConnectionUpdated_at";
  connection?: Maybe<TestimonialConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type TestimonialGroupBy = {
  __typename?: "TestimonialGroupBy";
  created_at?: Maybe<Array<Maybe<TestimonialConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TestimonialConnectionId>>>;
  image?: Maybe<Array<Maybe<TestimonialConnectionImage>>>;
  message?: Maybe<Array<Maybe<TestimonialConnectionMessage>>>;
  name?: Maybe<Array<Maybe<TestimonialConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<TestimonialConnectionUpdated_At>>>;
};

export type TestimonialInput = {
  created_by?: Maybe<Scalars["ID"]>;
  image?: Maybe<Scalars["ID"]>;
  message: Scalars["String"];
  name: Scalars["String"];
  updated_by?: Maybe<Scalars["ID"]>;
};

export type UploadFile = {
  __typename?: "UploadFile";
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  ext?: Maybe<Scalars["String"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  height?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  mime: Scalars["String"];
  name: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars["Float"];
  updated_at: Scalars["DateTime"];
  url: Scalars["String"];
  width?: Maybe<Scalars["Int"]>;
};

export type UploadFileRelatedArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type UploadFileAggregator = {
  __typename?: "UploadFileAggregator";
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type UploadFileAggregatorAvg = {
  __typename?: "UploadFileAggregatorAvg";
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMax = {
  __typename?: "UploadFileAggregatorMax";
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMin = {
  __typename?: "UploadFileAggregatorMin";
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorSum = {
  __typename?: "UploadFileAggregatorSum";
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type UploadFileConnection = {
  __typename?: "UploadFileConnection";
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: "UploadFileConnectionAlternativeText";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionCaption = {
  __typename?: "UploadFileConnectionCaption";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: "UploadFileConnectionCreated_at";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UploadFileConnectionExt = {
  __typename?: "UploadFileConnectionExt";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionFormats = {
  __typename?: "UploadFileConnectionFormats";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["JSON"]>;
};

export type UploadFileConnectionHash = {
  __typename?: "UploadFileConnectionHash";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionHeight = {
  __typename?: "UploadFileConnectionHeight";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["Int"]>;
};

export type UploadFileConnectionId = {
  __typename?: "UploadFileConnectionId";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type UploadFileConnectionMime = {
  __typename?: "UploadFileConnectionMime";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionName = {
  __typename?: "UploadFileConnectionName";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: "UploadFileConnectionPreviewUrl";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionProvider = {
  __typename?: "UploadFileConnectionProvider";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: "UploadFileConnectionProvider_metadata";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["JSON"]>;
};

export type UploadFileConnectionSize = {
  __typename?: "UploadFileConnectionSize";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["Float"]>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: "UploadFileConnectionUpdated_at";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UploadFileConnectionUrl = {
  __typename?: "UploadFileConnectionUrl";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionWidth = {
  __typename?: "UploadFileConnectionWidth";
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["Int"]>;
};

export type UploadFileGroupBy = {
  __typename?: "UploadFileGroupBy";
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<
    Array<Maybe<UploadFileConnectionProvider_Metadata>>
  >;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: Maybe<Scalars["Boolean"]>;
  blog_posts?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  confirmationToken?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  created_by?: Maybe<Scalars["ID"]>;
  email: Scalars["String"];
  password?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  resetPasswordToken?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
  username: Scalars["String"];
};

export type UserPermissionsPasswordPayload = {
  __typename?: "UserPermissionsPasswordPayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"];
  password: Scalars["String"];
  provider?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  email: Scalars["String"];
  id: Scalars["ID"];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars["String"];
};

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  type?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  action: Scalars["String"];
  controller: Scalars["String"];
  enabled: Scalars["Boolean"];
  id: Scalars["ID"];
  policy?: Maybe<Scalars["String"]>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars["String"];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars["String"]>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleUsersArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: "UsersPermissionsRoleAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: "UsersPermissionsRoleConnection";
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: "UsersPermissionsRoleConnectionDescription";
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: "UsersPermissionsRoleConnectionId";
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: "UsersPermissionsRoleConnectionName";
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: "UsersPermissionsRoleConnectionType";
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: "UsersPermissionsRoleGroupBy";
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  blocked?: Maybe<Scalars["Boolean"]>;
  blog_posts?: Maybe<Array<Maybe<BlogPost>>>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  created_at: Scalars["DateTime"];
  email: Scalars["String"];
  id: Scalars["ID"];
  provider?: Maybe<Scalars["String"]>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars["DateTime"];
  username: Scalars["String"];
};

export type UsersPermissionsUserBlog_PostsArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: "UsersPermissionsUserAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsUserConnection = {
  __typename?: "UsersPermissionsUserConnection";
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: "UsersPermissionsUserConnectionBlocked";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: "UsersPermissionsUserConnectionConfirmed";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: "UsersPermissionsUserConnectionCreated_at";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: "UsersPermissionsUserConnectionEmail";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: "UsersPermissionsUserConnectionId";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: "UsersPermissionsUserConnectionProvider";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: "UsersPermissionsUserConnectionRole";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: "UsersPermissionsUserConnectionUpdated_at";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: "UsersPermissionsUserConnectionUsername";
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: "UsersPermissionsUserGroupBy";
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type CreateBlogPostInput = {
  data?: Maybe<BlogPostInput>;
};

export type CreateBlogPostPayload = {
  __typename?: "createBlogPostPayload";
  blogPost?: Maybe<BlogPost>;
};

export type CreateCategoryInput = {
  data?: Maybe<CategoryInput>;
};

export type CreateCategoryPayload = {
  __typename?: "createCategoryPayload";
  category?: Maybe<Category>;
};

export type CreateCustomerInput = {
  data?: Maybe<CustomerInput>;
};

export type CreateCustomerPayload = {
  __typename?: "createCustomerPayload";
  customer?: Maybe<Customer>;
};

export type CreatePortfolioInput = {
  data?: Maybe<PortfolioInput>;
};

export type CreatePortfolioPayload = {
  __typename?: "createPortfolioPayload";
  portfolio?: Maybe<Portfolio>;
};

export type CreateProfessionalExperienceInput = {
  data?: Maybe<ProfessionalExperienceInput>;
};

export type CreateProfessionalExperiencePayload = {
  __typename?: "createProfessionalExperiencePayload";
  professionalExperience?: Maybe<ProfessionalExperiences>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: "createRolePayload";
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateTestimonialInput = {
  data?: Maybe<TestimonialInput>;
};

export type CreateTestimonialPayload = {
  __typename?: "createTestimonialPayload";
  testimonial?: Maybe<Testimonial>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: "createUserPayload";
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteAboutPagePayload = {
  __typename?: "deleteAboutPagePayload";
  aboutPage?: Maybe<AboutPage>;
};

export type DeleteBlogPagePayload = {
  __typename?: "deleteBlogPagePayload";
  blogPage?: Maybe<BlogPage>;
};

export type DeleteBlogPostInput = {
  where?: Maybe<InputId>;
};

export type DeleteBlogPostPayload = {
  __typename?: "deleteBlogPostPayload";
  blogPost?: Maybe<BlogPost>;
};

export type DeleteCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteCategoryPayload = {
  __typename?: "deleteCategoryPayload";
  category?: Maybe<Category>;
};

export type DeleteContactPagePayload = {
  __typename?: "deleteContactPagePayload";
  contactPage?: Maybe<ContactPage>;
};

export type DeleteCustomerInput = {
  where?: Maybe<InputId>;
};

export type DeleteCustomerPayload = {
  __typename?: "deleteCustomerPayload";
  customer?: Maybe<Customer>;
};

export type DeleteDefaultSeoPayload = {
  __typename?: "deleteDefaultSeoPayload";
  defaultSeo?: Maybe<DefaultSeo>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: "deleteFilePayload";
  file?: Maybe<UploadFile>;
};

export type DeleteHomePagePayload = {
  __typename?: "deleteHomePagePayload";
  homePage?: Maybe<HomePage>;
};

export type DeleteJournalisticPagePayload = {
  __typename?: "deleteJournalisticPagePayload";
  journalisticPage?: Maybe<JournalisticPage>;
};

export type DeletePortfolioInput = {
  where?: Maybe<InputId>;
};

export type DeletePortfolioPagePayload = {
  __typename?: "deletePortfolioPagePayload";
  portfolioPage?: Maybe<PortfolioPage>;
};

export type DeletePortfolioPayload = {
  __typename?: "deletePortfolioPayload";
  portfolio?: Maybe<Portfolio>;
};

export type DeleteProfessionalExperienceInput = {
  where?: Maybe<InputId>;
};

export type DeleteProfessionalExperiencePayload = {
  __typename?: "deleteProfessionalExperiencePayload";
  professionalExperience?: Maybe<ProfessionalExperiences>;
};

export type DeletePublicityPagePayload = {
  __typename?: "deletePublicityPagePayload";
  publicityPage?: Maybe<PublicityPage>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: "deleteRolePayload";
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteSocialLinkPayload = {
  __typename?: "deleteSocialLinkPayload";
  socialLink?: Maybe<SocialLinks>;
};

export type DeleteTestimonialInput = {
  where?: Maybe<InputId>;
};

export type DeleteTestimonialPayload = {
  __typename?: "deleteTestimonialPayload";
  testimonial?: Maybe<Testimonial>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: "deleteUserPayload";
  user?: Maybe<UsersPermissionsUser>;
};

export type EditAboutPageInput = {
  SEO?: Maybe<EditComponentSeoSeoInput>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditBlogPageInput = {
  SEO?: Maybe<EditComponentSeoSeoInput>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditBlogPostInput = {
  SEO?: Maybe<EditComponentSeoSeoInput>;
  author?: Maybe<Scalars["ID"]>;
  content?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["ID"]>;
  created_by?: Maybe<Scalars["ID"]>;
  description?: Maybe<Scalars["String"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditCategoryInput = {
  created_by?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  portfolios?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  slug?: Maybe<Scalars["String"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditComponentSeoOgTwitterInput = {
  card_type?: Maybe<Scalars["String"]>;
  handle?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  site?: Maybe<Scalars["String"]>;
};

export type EditComponentSeoOpenGraphImageInput = {
  alt?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["ID"]>;
  url?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type EditComponentSeoOpenGraphInput = {
  id?: Maybe<Scalars["ID"]>;
  images?: Maybe<Array<Maybe<EditComponentSeoOpenGraphImageInput>>>;
  locale?: Maybe<Scalars["String"]>;
  site_name?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type EditComponentSeoSeoInput = {
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  keywords?: Maybe<Scalars["String"]>;
  preventIndex?: Maybe<Scalars["Boolean"]>;
  title?: Maybe<Scalars["String"]>;
};

export type EditComponentSocialSocialInput = {
  id?: Maybe<Scalars["ID"]>;
  text?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type EditContactPageInput = {
  SEO?: Maybe<EditComponentSeoSeoInput>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditCustomerInput = {
  created_by?: Maybe<Scalars["ID"]>;
  logo?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  posts_de_portfolios?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditDefaultSeoInput = {
  OG?: Maybe<EditComponentSeoOpenGraphInput>;
  created_by?: Maybe<Scalars["ID"]>;
  title_template?: Maybe<Scalars["String"]>;
  twitter?: Maybe<EditComponentSeoOgTwitterInput>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditFileInput = {
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  created_by?: Maybe<Scalars["ID"]>;
  ext?: Maybe<Scalars["String"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  mime?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  previewUrl?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  size?: Maybe<Scalars["Float"]>;
  updated_by?: Maybe<Scalars["ID"]>;
  url?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type EditHomePageInput = {
  SEO?: Maybe<EditComponentSeoSeoInput>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditJournalisticPageInput = {
  SEO?: Maybe<EditComponentSeoSeoInput>;
  created_by?: Maybe<Scalars["ID"]>;
  text?: Maybe<Scalars["String"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditLocaleInput = {
  code?: Maybe<Scalars["String"]>;
  created_by?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditPortfolioInput = {
  SEO?: Maybe<EditComponentSeoSeoInput>;
  category?: Maybe<Scalars["ID"]>;
  content?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["ID"]>;
  created_by?: Maybe<Scalars["ID"]>;
  customer?: Maybe<Scalars["ID"]>;
  description?: Maybe<Scalars["String"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditPortfolioPageInput = {
  SEO?: Maybe<EditComponentSeoSeoInput>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditProfessionalExperienceInput = {
  created_by?: Maybe<Scalars["ID"]>;
  description?: Maybe<Scalars["String"]>;
  employer?: Maybe<Scalars["String"]>;
  in?: Maybe<Scalars["Date"]>;
  job?: Maybe<Scalars["String"]>;
  out?: Maybe<Scalars["Date"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditPublicityPageInput = {
  SEO?: Maybe<EditComponentSeoSeoInput>;
  created_by?: Maybe<Scalars["ID"]>;
  text?: Maybe<Scalars["String"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditRoleInput = {
  created_by?: Maybe<Scalars["ID"]>;
  description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  permissions?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  type?: Maybe<Scalars["String"]>;
  updated_by?: Maybe<Scalars["ID"]>;
  users?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type EditSocialLinkInput = {
  created_by?: Maybe<Scalars["ID"]>;
  email?: Maybe<EditComponentSocialSocialInput>;
  facebook?: Maybe<EditComponentSocialSocialInput>;
  instagram?: Maybe<EditComponentSocialSocialInput>;
  linkedin?: Maybe<EditComponentSocialSocialInput>;
  medium?: Maybe<EditComponentSocialSocialInput>;
  updated_by?: Maybe<Scalars["ID"]>;
  whatsapp?: Maybe<EditComponentSocialSocialInput>;
};

export type EditTestimonialInput = {
  created_by?: Maybe<Scalars["ID"]>;
  image?: Maybe<Scalars["ID"]>;
  message?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditUserInput = {
  blocked?: Maybe<Scalars["Boolean"]>;
  blog_posts?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  confirmationToken?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  created_by?: Maybe<Scalars["ID"]>;
  email?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  resetPasswordToken?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
  username?: Maybe<Scalars["String"]>;
};

export type UpdateAboutPageInput = {
  data?: Maybe<EditAboutPageInput>;
};

export type UpdateAboutPagePayload = {
  __typename?: "updateAboutPagePayload";
  aboutPage?: Maybe<AboutPage>;
};

export type UpdateBlogPageInput = {
  data?: Maybe<EditBlogPageInput>;
};

export type UpdateBlogPagePayload = {
  __typename?: "updateBlogPagePayload";
  blogPage?: Maybe<BlogPage>;
};

export type UpdateBlogPostInput = {
  data?: Maybe<EditBlogPostInput>;
  where?: Maybe<InputId>;
};

export type UpdateBlogPostPayload = {
  __typename?: "updateBlogPostPayload";
  blogPost?: Maybe<BlogPost>;
};

export type UpdateCategoryInput = {
  data?: Maybe<EditCategoryInput>;
  where?: Maybe<InputId>;
};

export type UpdateCategoryPayload = {
  __typename?: "updateCategoryPayload";
  category?: Maybe<Category>;
};

export type UpdateContactPageInput = {
  data?: Maybe<EditContactPageInput>;
};

export type UpdateContactPagePayload = {
  __typename?: "updateContactPagePayload";
  contactPage?: Maybe<ContactPage>;
};

export type UpdateCustomerInput = {
  data?: Maybe<EditCustomerInput>;
  where?: Maybe<InputId>;
};

export type UpdateCustomerPayload = {
  __typename?: "updateCustomerPayload";
  customer?: Maybe<Customer>;
};

export type UpdateDefaultSeoInput = {
  data?: Maybe<EditDefaultSeoInput>;
};

export type UpdateDefaultSeoPayload = {
  __typename?: "updateDefaultSeoPayload";
  defaultSeo?: Maybe<DefaultSeo>;
};

export type UpdateHomePageInput = {
  data?: Maybe<EditHomePageInput>;
};

export type UpdateHomePagePayload = {
  __typename?: "updateHomePagePayload";
  homePage?: Maybe<HomePage>;
};

export type UpdateJournalisticPageInput = {
  data?: Maybe<EditJournalisticPageInput>;
};

export type UpdateJournalisticPagePayload = {
  __typename?: "updateJournalisticPagePayload";
  journalisticPage?: Maybe<JournalisticPage>;
};

export type UpdatePortfolioInput = {
  data?: Maybe<EditPortfolioInput>;
  where?: Maybe<InputId>;
};

export type UpdatePortfolioPageInput = {
  data?: Maybe<EditPortfolioPageInput>;
};

export type UpdatePortfolioPagePayload = {
  __typename?: "updatePortfolioPagePayload";
  portfolioPage?: Maybe<PortfolioPage>;
};

export type UpdatePortfolioPayload = {
  __typename?: "updatePortfolioPayload";
  portfolio?: Maybe<Portfolio>;
};

export type UpdateProfessionalExperienceInput = {
  data?: Maybe<EditProfessionalExperienceInput>;
  where?: Maybe<InputId>;
};

export type UpdateProfessionalExperiencePayload = {
  __typename?: "updateProfessionalExperiencePayload";
  professionalExperience?: Maybe<ProfessionalExperiences>;
};

export type UpdatePublicityPageInput = {
  data?: Maybe<EditPublicityPageInput>;
};

export type UpdatePublicityPagePayload = {
  __typename?: "updatePublicityPagePayload";
  publicityPage?: Maybe<PublicityPage>;
};

export type UpdateRoleInput = {
  data?: Maybe<EditRoleInput>;
  where?: Maybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: "updateRolePayload";
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateSocialLinkInput = {
  data?: Maybe<EditSocialLinkInput>;
};

export type UpdateSocialLinkPayload = {
  __typename?: "updateSocialLinkPayload";
  socialLink?: Maybe<SocialLinks>;
};

export type UpdateTestimonialInput = {
  data?: Maybe<EditTestimonialInput>;
  where?: Maybe<InputId>;
};

export type UpdateTestimonialPayload = {
  __typename?: "updateTestimonialPayload";
  testimonial?: Maybe<Testimonial>;
};

export type UpdateUserInput = {
  data?: Maybe<EditUserInput>;
  where?: Maybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: "updateUserPayload";
  user?: Maybe<UsersPermissionsUser>;
};

export type AboutPageQueryVariables = Exact<{
  limit?: Scalars["Int"];
}>;

export type AboutPageQuery = {
  __typename?: "Query";
  aboutPage?:
    | {
        __typename?: "AboutPage";
        SEO?:
          | {
              __typename?: "ComponentSeoSeo";
              title: string;
              description: string;
              keywords: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  professionalExperiences?:
    | Array<
        | {
            __typename?: "ProfessionalExperiences";
            in: any;
            out: any;
            employer: string;
            job: string;
            description: string;
          }
        | null
        | undefined
      >
    | null
    | undefined;
  blogPosts?:
    | Array<
        | {
            __typename?: "BlogPost";
            slug: string;
            title: string;
            created_at: any;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
  portfolios?:
    | Array<
        | {
            __typename?: "Portfolio";
            slug: string;
            title: string;
            created_at: any;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type BlogPageQueryVariables = Exact<{
  limit?: Scalars["Int"];
}>;

export type BlogPageQuery = {
  __typename?: "Query";
  blogPage?:
    | {
        __typename?: "BlogPage";
        SEO?:
          | {
              __typename?: "ComponentSeoSeo";
              title: string;
              description: string;
              keywords: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  portfolios?:
    | Array<
        | {
            __typename?: "Portfolio";
            slug: string;
            title: string;
            created_at: any;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
  blogPosts?:
    | Array<
        | {
            __typename?: "BlogPost";
            id: string;
            title: string;
            description?: string | null | undefined;
            content: string;
            created_at: any;
            author?:
              | { __typename?: "UsersPermissionsUser"; username: string }
              | null
              | undefined;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type BlogPostQueryVariables = Exact<{
  limit?: Scalars["Int"];
}>;

export type BlogPostQuery = {
  __typename?: "Query";
  blogPosts?:
    | Array<
        | {
            __typename?: "BlogPost";
            id: string;
            title: string;
            description?: string | null | undefined;
            content: string;
            created_at: any;
            author?:
              | { __typename?: "UsersPermissionsUser"; username: string }
              | null
              | undefined;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type BlogPostSlugQueryVariables = Exact<{ [key: string]: never }>;

export type BlogPostSlugQuery = {
  __typename?: "Query";
  blogPosts?:
    | Array<{ __typename?: "BlogPost"; slug: string } | null | undefined>
    | null
    | undefined;
};

export type BlogPostForSliderQueryVariables = Exact<{
  limit?: Scalars["Int"];
}>;

export type BlogPostForSliderQuery = {
  __typename?: "Query";
  blogPosts?:
    | Array<
        | {
            __typename?: "BlogPost";
            slug: string;
            title: string;
            created_at: any;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type BlogPostBySlugQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export type BlogPostBySlugQuery = {
  __typename?: "Query";
  blogPosts?:
    | Array<
        | {
            __typename?: "BlogPost";
            slug: string;
            title: string;
            description?: string | null | undefined;
            content: string;
            created_at: any;
            updated_at: any;
            SEO?:
              | {
                  __typename?: "ComponentSeoSeo";
                  title: string;
                  description: string;
                  keywords: string;
                }
              | null
              | undefined;
            author?:
              | { __typename?: "UsersPermissionsUser"; username: string }
              | null
              | undefined;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type ContactPageQueryVariables = Exact<{ [key: string]: never }>;

export type ContactPageQuery = {
  __typename?: "Query";
  contactPage?:
    | {
        __typename?: "ContactPage";
        SEO?:
          | {
              __typename?: "ComponentSeoSeo";
              title: string;
              description: string;
              keywords: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  socialLink?:
    | {
        __typename?: "SocialLinks";
        whatsapp?:
          | { __typename?: "ComponentSocialSocial"; text: string; url: string }
          | null
          | undefined;
        email?:
          | { __typename?: "ComponentSocialSocial"; text: string; url: string }
          | null
          | undefined;
        facebook?:
          | { __typename?: "ComponentSocialSocial"; text: string; url: string }
          | null
          | undefined;
        instagram?:
          | { __typename?: "ComponentSocialSocial"; text: string; url: string }
          | null
          | undefined;
        linkedin?:
          | { __typename?: "ComponentSocialSocial"; text: string; url: string }
          | null
          | undefined;
        medium?:
          | { __typename?: "ComponentSocialSocial"; text: string; url: string }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type PortfolioCoverFieldsFragment = {
  __typename?: "Portfolio";
  cover?:
    | {
        __typename?: "UploadFile";
        alternativeText?: string | null | undefined;
        url: string;
      }
    | null
    | undefined;
};

export type PortfolioSliderFieldsFragment = {
  __typename?: "Portfolio";
  slug: string;
  title: string;
  created_at: any;
  cover?:
    | {
        __typename?: "UploadFile";
        alternativeText?: string | null | undefined;
        url: string;
      }
    | null
    | undefined;
};

export type PortfolioPageFieldsFragment = {
  __typename?: "Portfolio";
  slug: string;
  title: string;
  description: string;
  content: string;
  created_at: any;
  category?: { __typename?: "Category"; name: string } | null | undefined;
  cover?:
    | {
        __typename?: "UploadFile";
        alternativeText?: string | null | undefined;
        url: string;
      }
    | null
    | undefined;
};

export type PortfolioPostFieldsFragment = {
  __typename?: "Portfolio";
  slug: string;
  title: string;
  description: string;
  content: string;
  created_at: any;
  category?: { __typename?: "Category"; name: string } | null | undefined;
  customer?:
    | {
        __typename?: "Customer";
        name: string;
        logo?:
          | {
              __typename?: "UploadFile";
              alternativeText?: string | null | undefined;
              url: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  cover?:
    | {
        __typename?: "UploadFile";
        alternativeText?: string | null | undefined;
        url: string;
      }
    | null
    | undefined;
};

export type BlogPostCoverFieldsFragment = {
  __typename?: "BlogPost";
  cover?:
    | {
        __typename?: "UploadFile";
        alternativeText?: string | null | undefined;
        url: string;
      }
    | null
    | undefined;
};

export type BlogPostSliderFieldsFragment = {
  __typename?: "BlogPost";
  slug: string;
  title: string;
  created_at: any;
  cover?:
    | {
        __typename?: "UploadFile";
        alternativeText?: string | null | undefined;
        url: string;
      }
    | null
    | undefined;
};

export type BlogPostPageFieldsFragment = {
  __typename?: "BlogPost";
  id: string;
  title: string;
  description?: string | null | undefined;
  content: string;
  created_at: any;
  author?:
    | { __typename?: "UsersPermissionsUser"; username: string }
    | null
    | undefined;
  cover?:
    | {
        __typename?: "UploadFile";
        alternativeText?: string | null | undefined;
        url: string;
      }
    | null
    | undefined;
};

export type BlogPostFieldsFragment = {
  __typename?: "BlogPost";
  slug: string;
  title: string;
  description?: string | null | undefined;
  content: string;
  created_at: any;
  updated_at: any;
  author?:
    | { __typename?: "UsersPermissionsUser"; username: string }
    | null
    | undefined;
  cover?:
    | {
        __typename?: "UploadFile";
        alternativeText?: string | null | undefined;
        url: string;
      }
    | null
    | undefined;
};

export type HomePageQueryVariables = Exact<{
  limit?: Scalars["Int"];
}>;

export type HomePageQuery = {
  __typename?: "Query";
  blogPosts?:
    | Array<
        | {
            __typename?: "BlogPost";
            slug: string;
            title: string;
            created_at: any;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
  portfolios?:
    | Array<
        | {
            __typename?: "Portfolio";
            slug: string;
            title: string;
            created_at: any;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
  testimonials?:
    | Array<
        | {
            __typename?: "Testimonial";
            name: string;
            message: string;
            image?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
  homePage?:
    | {
        __typename?: "HomePage";
        SEO?:
          | {
              __typename?: "ComponentSeoSeo";
              title: string;
              description: string;
              keywords: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type JournalisticPageQueryVariables = Exact<{
  limit?: Scalars["Int"];
}>;

export type JournalisticPageQuery = {
  __typename?: "Query";
  journalisticPage?:
    | {
        __typename?: "JournalisticPage";
        text: string;
        SEO?:
          | {
              __typename?: "ComponentSeoSeo";
              title: string;
              description: string;
              keywords: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  portfolios?:
    | Array<
        | {
            __typename?: "Portfolio";
            slug: string;
            title: string;
            created_at: any;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
  blogPosts?:
    | Array<
        | {
            __typename?: "BlogPost";
            slug: string;
            title: string;
            created_at: any;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type PortfolioPageQueryVariables = Exact<{
  limit?: Scalars["Int"];
}>;

export type PortfolioPageQuery = {
  __typename?: "Query";
  portfolioPage?:
    | {
        __typename?: "PortfolioPage";
        SEO?:
          | {
              __typename?: "ComponentSeoSeo";
              title: string;
              description: string;
              keywords: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  portfolios?:
    | Array<
        | {
            __typename?: "Portfolio";
            slug: string;
            title: string;
            description: string;
            content: string;
            created_at: any;
            category?:
              | { __typename?: "Category"; name: string }
              | null
              | undefined;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
  blogPosts?:
    | Array<
        | {
            __typename?: "BlogPost";
            slug: string;
            title: string;
            created_at: any;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type PortfolioQueryVariables = Exact<{
  start?: Scalars["Int"];
}>;

export type PortfolioQuery = {
  __typename?: "Query";
  portfolios?:
    | Array<
        | {
            __typename?: "Portfolio";
            slug: string;
            title: string;
            description: string;
            content: string;
            created_at: any;
            category?:
              | { __typename?: "Category"; name: string }
              | null
              | undefined;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type PortfolioBySlugQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export type PortfolioBySlugQuery = {
  __typename?: "Query";
  portfolios?:
    | Array<
        | {
            __typename?: "Portfolio";
            slug: string;
            title: string;
            description: string;
            content: string;
            created_at: any;
            SEO?:
              | {
                  __typename?: "ComponentSeoSeo";
                  title: string;
                  description: string;
                  keywords: string;
                }
              | null
              | undefined;
            category?:
              | { __typename?: "Category"; name: string }
              | null
              | undefined;
            customer?:
              | {
                  __typename?: "Customer";
                  name: string;
                  logo?:
                    | {
                        __typename?: "UploadFile";
                        alternativeText?: string | null | undefined;
                        url: string;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type PortfolioSlugQueryVariables = Exact<{ [key: string]: never }>;

export type PortfolioSlugQuery = {
  __typename?: "Query";
  portfolios?:
    | Array<{ __typename?: "Portfolio"; slug: string } | null | undefined>
    | null
    | undefined;
};

export type PortfolioSliderQueryVariables = Exact<{
  limit?: Scalars["Int"];
}>;

export type PortfolioSliderQuery = {
  __typename?: "Query";
  portfolios?:
    | Array<
        | {
            __typename?: "Portfolio";
            slug: string;
            title: string;
            created_at: any;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type PublicityPageQueryVariables = Exact<{
  limit?: Scalars["Int"];
}>;

export type PublicityPageQuery = {
  __typename?: "Query";
  publicityPage?:
    | {
        __typename?: "PublicityPage";
        text: string;
        SEO?:
          | {
              __typename?: "ComponentSeoSeo";
              title: string;
              description: string;
              keywords: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  portfolios?:
    | Array<
        | {
            __typename?: "Portfolio";
            slug: string;
            title: string;
            created_at: any;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
  blogPosts?:
    | Array<
        | {
            __typename?: "BlogPost";
            slug: string;
            title: string;
            created_at: any;
            cover?:
              | {
                  __typename?: "UploadFile";
                  alternativeText?: string | null | undefined;
                  url: string;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export type SocialLinksQueryVariables = Exact<{ [key: string]: never }>;

export type SocialLinksQuery = {
  __typename?: "Query";
  socialLink?:
    | {
        __typename?: "SocialLinks";
        facebook?:
          | { __typename?: "ComponentSocialSocial"; text: string; url: string }
          | null
          | undefined;
        instagram?:
          | { __typename?: "ComponentSocialSocial"; text: string; url: string }
          | null
          | undefined;
        linkedin?:
          | { __typename?: "ComponentSocialSocial"; text: string; url: string }
          | null
          | undefined;
        medium?:
          | { __typename?: "ComponentSocialSocial"; text: string; url: string }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export const PortfolioCoverFieldsFragmentDoc = gql`
  fragment PortfolioCoverFields on Portfolio {
    cover {
      alternativeText
      url
    }
  }
`;
export const PortfolioSliderFieldsFragmentDoc = gql`
  fragment PortfolioSliderFields on Portfolio {
    slug
    title
    ...PortfolioCoverFields
    created_at
  }
  ${PortfolioCoverFieldsFragmentDoc}
`;
export const PortfolioPageFieldsFragmentDoc = gql`
  fragment PortfolioPageFields on Portfolio {
    slug
    title
    description
    content
    ...PortfolioCoverFields
    category {
      name
    }
    created_at
  }
  ${PortfolioCoverFieldsFragmentDoc}
`;
export const PortfolioPostFieldsFragmentDoc = gql`
  fragment PortfolioPostFields on Portfolio {
    slug
    title
    description
    content
    ...PortfolioCoverFields
    category {
      name
    }
    customer {
      name
      logo {
        alternativeText
        url
      }
    }
    created_at
  }
  ${PortfolioCoverFieldsFragmentDoc}
`;
export const BlogPostCoverFieldsFragmentDoc = gql`
  fragment BlogPostCoverFields on BlogPost {
    cover {
      alternativeText
      url
    }
  }
`;
export const BlogPostSliderFieldsFragmentDoc = gql`
  fragment BlogPostSliderFields on BlogPost {
    slug
    title
    ...BlogPostCoverFields
    created_at
  }
  ${BlogPostCoverFieldsFragmentDoc}
`;
export const BlogPostPageFieldsFragmentDoc = gql`
  fragment BlogPostPageFields on BlogPost {
    id
    title
    description
    content
    ...BlogPostCoverFields
    author {
      username
    }
    created_at
  }
  ${BlogPostCoverFieldsFragmentDoc}
`;
export const BlogPostFieldsFragmentDoc = gql`
  fragment BlogPostFields on BlogPost {
    slug
    title
    description
    content
    author {
      username
    }
    ...BlogPostCoverFields
    created_at
    updated_at
  }
  ${BlogPostCoverFieldsFragmentDoc}
`;
export const AboutPageDocument = gql`
  query AboutPage($limit: Int! = 6) {
    aboutPage {
      SEO {
        title
        description
        keywords
      }
    }
    professionalExperiences {
      in
      out
      employer
      job
      description
    }
    blogPosts(limit: $limit, sort: "created_at:DESC") {
      ...BlogPostSliderFields
    }
    portfolios(limit: 1, sort: "created_at:DESC") {
      ...PortfolioSliderFields
    }
  }
  ${BlogPostSliderFieldsFragmentDoc}
  ${PortfolioSliderFieldsFragmentDoc}
`;

/**
 * __useAboutPageQuery__
 *
 * To run a query within a React component, call `useAboutPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutPageQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useAboutPageQuery(
  baseOptions?: Apollo.QueryHookOptions<AboutPageQuery, AboutPageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AboutPageQuery, AboutPageQueryVariables>(
    AboutPageDocument,
    options
  );
}
export function useAboutPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AboutPageQuery,
    AboutPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AboutPageQuery, AboutPageQueryVariables>(
    AboutPageDocument,
    options
  );
}
export type AboutPageQueryHookResult = ReturnType<typeof useAboutPageQuery>;
export type AboutPageLazyQueryHookResult = ReturnType<
  typeof useAboutPageLazyQuery
>;
export type AboutPageQueryResult = Apollo.QueryResult<
  AboutPageQuery,
  AboutPageQueryVariables
>;
export const BlogPageDocument = gql`
  query BlogPage($limit: Int! = 6) {
    blogPage {
      SEO {
        title
        description
        keywords
      }
    }
    portfolios(limit: $limit, sort: "created_at:DESC") {
      ...PortfolioSliderFields
    }
    blogPosts(limit: $limit, sort: "created_at:DESC") {
      ...BlogPostPageFields
    }
  }
  ${PortfolioSliderFieldsFragmentDoc}
  ${BlogPostPageFieldsFragmentDoc}
`;

/**
 * __useBlogPageQuery__
 *
 * To run a query within a React component, call `useBlogPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPageQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useBlogPageQuery(
  baseOptions?: Apollo.QueryHookOptions<BlogPageQuery, BlogPageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BlogPageQuery, BlogPageQueryVariables>(
    BlogPageDocument,
    options
  );
}
export function useBlogPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BlogPageQuery,
    BlogPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BlogPageQuery, BlogPageQueryVariables>(
    BlogPageDocument,
    options
  );
}
export type BlogPageQueryHookResult = ReturnType<typeof useBlogPageQuery>;
export type BlogPageLazyQueryHookResult = ReturnType<
  typeof useBlogPageLazyQuery
>;
export type BlogPageQueryResult = Apollo.QueryResult<
  BlogPageQuery,
  BlogPageQueryVariables
>;
export const BlogPostDocument = gql`
  query BlogPost($limit: Int! = 6) {
    blogPosts(limit: $limit, sort: "created_at:DESC") {
      ...BlogPostPageFields
    }
  }
  ${BlogPostPageFieldsFragmentDoc}
`;

/**
 * __useBlogPostQuery__
 *
 * To run a query within a React component, call `useBlogPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPostQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useBlogPostQuery(
  baseOptions?: Apollo.QueryHookOptions<BlogPostQuery, BlogPostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BlogPostQuery, BlogPostQueryVariables>(
    BlogPostDocument,
    options
  );
}
export function useBlogPostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BlogPostQuery,
    BlogPostQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BlogPostQuery, BlogPostQueryVariables>(
    BlogPostDocument,
    options
  );
}
export type BlogPostQueryHookResult = ReturnType<typeof useBlogPostQuery>;
export type BlogPostLazyQueryHookResult = ReturnType<
  typeof useBlogPostLazyQuery
>;
export type BlogPostQueryResult = Apollo.QueryResult<
  BlogPostQuery,
  BlogPostQueryVariables
>;
export const BlogPostSlugDocument = gql`
  query BlogPostSlug {
    blogPosts {
      slug
    }
  }
`;

/**
 * __useBlogPostSlugQuery__
 *
 * To run a query within a React component, call `useBlogPostSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPostSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPostSlugQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlogPostSlugQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BlogPostSlugQuery,
    BlogPostSlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BlogPostSlugQuery, BlogPostSlugQueryVariables>(
    BlogPostSlugDocument,
    options
  );
}
export function useBlogPostSlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BlogPostSlugQuery,
    BlogPostSlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BlogPostSlugQuery, BlogPostSlugQueryVariables>(
    BlogPostSlugDocument,
    options
  );
}
export type BlogPostSlugQueryHookResult = ReturnType<
  typeof useBlogPostSlugQuery
>;
export type BlogPostSlugLazyQueryHookResult = ReturnType<
  typeof useBlogPostSlugLazyQuery
>;
export type BlogPostSlugQueryResult = Apollo.QueryResult<
  BlogPostSlugQuery,
  BlogPostSlugQueryVariables
>;
export const BlogPostForSliderDocument = gql`
  query BlogPostForSlider($limit: Int! = 6) {
    blogPosts(limit: $limit, sort: "created_at:DESC") {
      ...BlogPostSliderFields
    }
  }
  ${BlogPostSliderFieldsFragmentDoc}
`;

/**
 * __useBlogPostForSliderQuery__
 *
 * To run a query within a React component, call `useBlogPostForSliderQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPostForSliderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPostForSliderQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useBlogPostForSliderQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BlogPostForSliderQuery,
    BlogPostForSliderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BlogPostForSliderQuery,
    BlogPostForSliderQueryVariables
  >(BlogPostForSliderDocument, options);
}
export function useBlogPostForSliderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BlogPostForSliderQuery,
    BlogPostForSliderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BlogPostForSliderQuery,
    BlogPostForSliderQueryVariables
  >(BlogPostForSliderDocument, options);
}
export type BlogPostForSliderQueryHookResult = ReturnType<
  typeof useBlogPostForSliderQuery
>;
export type BlogPostForSliderLazyQueryHookResult = ReturnType<
  typeof useBlogPostForSliderLazyQuery
>;
export type BlogPostForSliderQueryResult = Apollo.QueryResult<
  BlogPostForSliderQuery,
  BlogPostForSliderQueryVariables
>;
export const BlogPostBySlugDocument = gql`
  query BlogPostBySlug($slug: String!) {
    blogPosts(where: { slug: $slug }) {
      ...BlogPostFields
      SEO {
        title
        description
        keywords
      }
    }
  }
  ${BlogPostFieldsFragmentDoc}
`;

/**
 * __useBlogPostBySlugQuery__
 *
 * To run a query within a React component, call `useBlogPostBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPostBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPostBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useBlogPostBySlugQuery(
  baseOptions: Apollo.QueryHookOptions<
    BlogPostBySlugQuery,
    BlogPostBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BlogPostBySlugQuery, BlogPostBySlugQueryVariables>(
    BlogPostBySlugDocument,
    options
  );
}
export function useBlogPostBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BlogPostBySlugQuery,
    BlogPostBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BlogPostBySlugQuery, BlogPostBySlugQueryVariables>(
    BlogPostBySlugDocument,
    options
  );
}
export type BlogPostBySlugQueryHookResult = ReturnType<
  typeof useBlogPostBySlugQuery
>;
export type BlogPostBySlugLazyQueryHookResult = ReturnType<
  typeof useBlogPostBySlugLazyQuery
>;
export type BlogPostBySlugQueryResult = Apollo.QueryResult<
  BlogPostBySlugQuery,
  BlogPostBySlugQueryVariables
>;
export const ContactPageDocument = gql`
  query ContactPage {
    contactPage {
      SEO {
        title
        description
        keywords
      }
    }
    socialLink {
      whatsapp {
        text
        url
      }
      email {
        text
        url
      }
      facebook {
        text
        url
      }
      instagram {
        text
        url
      }
      linkedin {
        text
        url
      }
      medium {
        text
        url
      }
    }
  }
`;

/**
 * __useContactPageQuery__
 *
 * To run a query within a React component, call `useContactPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useContactPageQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ContactPageQuery,
    ContactPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ContactPageQuery, ContactPageQueryVariables>(
    ContactPageDocument,
    options
  );
}
export function useContactPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ContactPageQuery,
    ContactPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ContactPageQuery, ContactPageQueryVariables>(
    ContactPageDocument,
    options
  );
}
export type ContactPageQueryHookResult = ReturnType<typeof useContactPageQuery>;
export type ContactPageLazyQueryHookResult = ReturnType<
  typeof useContactPageLazyQuery
>;
export type ContactPageQueryResult = Apollo.QueryResult<
  ContactPageQuery,
  ContactPageQueryVariables
>;
export const HomePageDocument = gql`
  query HomePage($limit: Int! = 6) {
    blogPosts(limit: $limit, sort: "created_at:DESC") {
      ...BlogPostSliderFields
    }
    portfolios(limit: $limit, sort: "created_at:DESC") {
      ...PortfolioSliderFields
    }
    testimonials {
      name
      message
      image {
        alternativeText
        url
      }
    }
    homePage {
      SEO {
        title
        description
        keywords
      }
    }
  }
  ${BlogPostSliderFieldsFragmentDoc}
  ${PortfolioSliderFieldsFragmentDoc}
`;

/**
 * __useHomePageQuery__
 *
 * To run a query within a React component, call `useHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePageQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useHomePageQuery(
  baseOptions?: Apollo.QueryHookOptions<HomePageQuery, HomePageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HomePageQuery, HomePageQueryVariables>(
    HomePageDocument,
    options
  );
}
export function useHomePageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomePageQuery,
    HomePageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<HomePageQuery, HomePageQueryVariables>(
    HomePageDocument,
    options
  );
}
export type HomePageQueryHookResult = ReturnType<typeof useHomePageQuery>;
export type HomePageLazyQueryHookResult = ReturnType<
  typeof useHomePageLazyQuery
>;
export type HomePageQueryResult = Apollo.QueryResult<
  HomePageQuery,
  HomePageQueryVariables
>;
export const JournalisticPageDocument = gql`
  query JournalisticPage($limit: Int! = 6) {
    journalisticPage {
      text
      SEO {
        title
        description
        keywords
      }
    }
    portfolios(limit: $limit, sort: "created_at:DESC") {
      ...PortfolioSliderFields
    }
    blogPosts(limit: $limit, sort: "created_at:DESC") {
      ...BlogPostSliderFields
    }
  }
  ${PortfolioSliderFieldsFragmentDoc}
  ${BlogPostSliderFieldsFragmentDoc}
`;

/**
 * __useJournalisticPageQuery__
 *
 * To run a query within a React component, call `useJournalisticPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useJournalisticPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJournalisticPageQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useJournalisticPageQuery(
  baseOptions?: Apollo.QueryHookOptions<
    JournalisticPageQuery,
    JournalisticPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<JournalisticPageQuery, JournalisticPageQueryVariables>(
    JournalisticPageDocument,
    options
  );
}
export function useJournalisticPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    JournalisticPageQuery,
    JournalisticPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    JournalisticPageQuery,
    JournalisticPageQueryVariables
  >(JournalisticPageDocument, options);
}
export type JournalisticPageQueryHookResult = ReturnType<
  typeof useJournalisticPageQuery
>;
export type JournalisticPageLazyQueryHookResult = ReturnType<
  typeof useJournalisticPageLazyQuery
>;
export type JournalisticPageQueryResult = Apollo.QueryResult<
  JournalisticPageQuery,
  JournalisticPageQueryVariables
>;
export const PortfolioPageDocument = gql`
  query PortfolioPage($limit: Int! = 7) {
    portfolioPage {
      SEO {
        title
        description
        keywords
      }
    }
    portfolios(limit: $limit, sort: "created_at:DESC") {
      ...PortfolioPageFields
    }
    blogPosts(limit: $limit, sort: "created_at:DESC") {
      ...BlogPostSliderFields
    }
  }
  ${PortfolioPageFieldsFragmentDoc}
  ${BlogPostSliderFieldsFragmentDoc}
`;

/**
 * __usePortfolioPageQuery__
 *
 * To run a query within a React component, call `usePortfolioPageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePortfolioPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePortfolioPageQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function usePortfolioPageQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PortfolioPageQuery,
    PortfolioPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PortfolioPageQuery, PortfolioPageQueryVariables>(
    PortfolioPageDocument,
    options
  );
}
export function usePortfolioPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PortfolioPageQuery,
    PortfolioPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PortfolioPageQuery, PortfolioPageQueryVariables>(
    PortfolioPageDocument,
    options
  );
}
export type PortfolioPageQueryHookResult = ReturnType<
  typeof usePortfolioPageQuery
>;
export type PortfolioPageLazyQueryHookResult = ReturnType<
  typeof usePortfolioPageLazyQuery
>;
export type PortfolioPageQueryResult = Apollo.QueryResult<
  PortfolioPageQuery,
  PortfolioPageQueryVariables
>;
export const PortfolioDocument = gql`
  query Portfolio($start: Int! = 1) {
    portfolios(start: $start, sort: "created_at:DESC") {
      ...PortfolioPageFields
    }
  }
  ${PortfolioPageFieldsFragmentDoc}
`;

/**
 * __usePortfolioQuery__
 *
 * To run a query within a React component, call `usePortfolioQuery` and pass it any options that fit your needs.
 * When your component renders, `usePortfolioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePortfolioQuery({
 *   variables: {
 *      start: // value for 'start'
 *   },
 * });
 */
export function usePortfolioQuery(
  baseOptions?: Apollo.QueryHookOptions<PortfolioQuery, PortfolioQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PortfolioQuery, PortfolioQueryVariables>(
    PortfolioDocument,
    options
  );
}
export function usePortfolioLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PortfolioQuery,
    PortfolioQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PortfolioQuery, PortfolioQueryVariables>(
    PortfolioDocument,
    options
  );
}
export type PortfolioQueryHookResult = ReturnType<typeof usePortfolioQuery>;
export type PortfolioLazyQueryHookResult = ReturnType<
  typeof usePortfolioLazyQuery
>;
export type PortfolioQueryResult = Apollo.QueryResult<
  PortfolioQuery,
  PortfolioQueryVariables
>;
export const PortfolioBySlugDocument = gql`
  query PortfolioBySlug($slug: String!) {
    portfolios(where: { slug: $slug }) {
      ...PortfolioPostFields
      SEO {
        title
        description
        keywords
      }
    }
  }
  ${PortfolioPostFieldsFragmentDoc}
`;

/**
 * __usePortfolioBySlugQuery__
 *
 * To run a query within a React component, call `usePortfolioBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `usePortfolioBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePortfolioBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePortfolioBySlugQuery(
  baseOptions: Apollo.QueryHookOptions<
    PortfolioBySlugQuery,
    PortfolioBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PortfolioBySlugQuery, PortfolioBySlugQueryVariables>(
    PortfolioBySlugDocument,
    options
  );
}
export function usePortfolioBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PortfolioBySlugQuery,
    PortfolioBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PortfolioBySlugQuery,
    PortfolioBySlugQueryVariables
  >(PortfolioBySlugDocument, options);
}
export type PortfolioBySlugQueryHookResult = ReturnType<
  typeof usePortfolioBySlugQuery
>;
export type PortfolioBySlugLazyQueryHookResult = ReturnType<
  typeof usePortfolioBySlugLazyQuery
>;
export type PortfolioBySlugQueryResult = Apollo.QueryResult<
  PortfolioBySlugQuery,
  PortfolioBySlugQueryVariables
>;
export const PortfolioSlugDocument = gql`
  query PortfolioSlug {
    portfolios {
      slug
    }
  }
`;

/**
 * __usePortfolioSlugQuery__
 *
 * To run a query within a React component, call `usePortfolioSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `usePortfolioSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePortfolioSlugQuery({
 *   variables: {
 *   },
 * });
 */
export function usePortfolioSlugQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PortfolioSlugQuery,
    PortfolioSlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PortfolioSlugQuery, PortfolioSlugQueryVariables>(
    PortfolioSlugDocument,
    options
  );
}
export function usePortfolioSlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PortfolioSlugQuery,
    PortfolioSlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PortfolioSlugQuery, PortfolioSlugQueryVariables>(
    PortfolioSlugDocument,
    options
  );
}
export type PortfolioSlugQueryHookResult = ReturnType<
  typeof usePortfolioSlugQuery
>;
export type PortfolioSlugLazyQueryHookResult = ReturnType<
  typeof usePortfolioSlugLazyQuery
>;
export type PortfolioSlugQueryResult = Apollo.QueryResult<
  PortfolioSlugQuery,
  PortfolioSlugQueryVariables
>;
export const PortfolioSliderDocument = gql`
  query PortfolioSlider($limit: Int! = 6) {
    portfolios(limit: $limit, sort: "created_at:DESC") {
      ...PortfolioSliderFields
    }
  }
  ${PortfolioSliderFieldsFragmentDoc}
`;

/**
 * __usePortfolioSliderQuery__
 *
 * To run a query within a React component, call `usePortfolioSliderQuery` and pass it any options that fit your needs.
 * When your component renders, `usePortfolioSliderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePortfolioSliderQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function usePortfolioSliderQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PortfolioSliderQuery,
    PortfolioSliderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PortfolioSliderQuery, PortfolioSliderQueryVariables>(
    PortfolioSliderDocument,
    options
  );
}
export function usePortfolioSliderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PortfolioSliderQuery,
    PortfolioSliderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PortfolioSliderQuery,
    PortfolioSliderQueryVariables
  >(PortfolioSliderDocument, options);
}
export type PortfolioSliderQueryHookResult = ReturnType<
  typeof usePortfolioSliderQuery
>;
export type PortfolioSliderLazyQueryHookResult = ReturnType<
  typeof usePortfolioSliderLazyQuery
>;
export type PortfolioSliderQueryResult = Apollo.QueryResult<
  PortfolioSliderQuery,
  PortfolioSliderQueryVariables
>;
export const PublicityPageDocument = gql`
  query PublicityPage($limit: Int! = 6) {
    publicityPage {
      text
      SEO {
        title
        description
        keywords
      }
    }
    portfolios(limit: $limit, sort: "created_at:DESC") {
      ...PortfolioSliderFields
    }
    blogPosts(limit: $limit, sort: "created_at:DESC") {
      ...BlogPostSliderFields
    }
  }
  ${PortfolioSliderFieldsFragmentDoc}
  ${BlogPostSliderFieldsFragmentDoc}
`;

/**
 * __usePublicityPageQuery__
 *
 * To run a query within a React component, call `usePublicityPageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicityPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicityPageQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function usePublicityPageQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PublicityPageQuery,
    PublicityPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PublicityPageQuery, PublicityPageQueryVariables>(
    PublicityPageDocument,
    options
  );
}
export function usePublicityPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PublicityPageQuery,
    PublicityPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PublicityPageQuery, PublicityPageQueryVariables>(
    PublicityPageDocument,
    options
  );
}
export type PublicityPageQueryHookResult = ReturnType<
  typeof usePublicityPageQuery
>;
export type PublicityPageLazyQueryHookResult = ReturnType<
  typeof usePublicityPageLazyQuery
>;
export type PublicityPageQueryResult = Apollo.QueryResult<
  PublicityPageQuery,
  PublicityPageQueryVariables
>;
export const SocialLinksDocument = gql`
  query SocialLinks {
    socialLink {
      facebook {
        text
        url
      }
      instagram {
        text
        url
      }
      linkedin {
        text
        url
      }
      medium {
        text
        url
      }
    }
  }
`;

/**
 * __useSocialLinksQuery__
 *
 * To run a query within a React component, call `useSocialLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useSocialLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSocialLinksQuery({
 *   variables: {
 *   },
 * });
 */
export function useSocialLinksQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SocialLinksQuery,
    SocialLinksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SocialLinksQuery, SocialLinksQueryVariables>(
    SocialLinksDocument,
    options
  );
}
export function useSocialLinksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SocialLinksQuery,
    SocialLinksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SocialLinksQuery, SocialLinksQueryVariables>(
    SocialLinksDocument,
    options
  );
}
export type SocialLinksQueryHookResult = ReturnType<typeof useSocialLinksQuery>;
export type SocialLinksLazyQueryHookResult = ReturnType<
  typeof useSocialLinksLazyQuery
>;
export type SocialLinksQueryResult = Apollo.QueryResult<
  SocialLinksQuery,
  SocialLinksQueryVariables
>;
