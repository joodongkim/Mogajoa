export const teamId = "10-3";

export enum ActionType {
  //UESR
  GETUSERSME = 1001,
  PATCHUSERSME,
  GETUSERSRANKING,
  GETUSERSINFO,
  GETUSERSPRODUCTS,
  GETUSERSREVIEWS,
  GETUSERSLIKES,
  GETUSERSFOLLOWING,
  GETUSERSFOLLOWERS,
  //REVIEW
  POSTREVIEWSLIKE = 2001,
  DELETEREVIEWSLIKE,
  POSTREVIEWS,
  DELETEREVIEWS,
  PATCHREVIEWS,
  //PRODUCT
  GETPRODUCTS = 3001,
  POSTPRODUCTS,
  GETPRODUCTSDETAIL,
  PATCHPRODUCTS,
  DELETEPRODUCTS,
  GETPRODUCTSREVIEWS,
  POSTPRODUCTSFAVORITE,
  DELETEPRODUCTSFAVORITE,
  //OAUTH
  POSTOAUTHAPPS = 4001,
  //IMAGE
  POSTIMAGESUPLOAD = 5001,
  //FOLLOW
  POSTFOLLOW = 6001,
  DELETEFOLLOW,
  //CATEGORY
  GETCATEGORIES = 7001,
  //AUTH
  POSTSIGNUP = 8001,
  POSTSIGNIN,
  POSTSIGNUPPROVIDER,
  POSTSIGNINPROVIDER,
}

// Auth Types
export type SignInProps = {
  email: string;
  password: string;
};

export type SignUpProps = SignInProps & {
  nickname: string;
  passwordConfirmation: string;
};

export type MostFavoriteCategory = {
  name: string;
  id: number;
};

export type UserData = MostFavoriteCategory & {
  id: number;
  nickname: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  teamId: string;
  isFollowing: boolean;
  followersCount: number;
  followeesCount: number;
  reviewCount: number;
  averageRating: number;
};

export type SignInData = {
  user: UserData;
  accessToken: string;
};

export type SignUpData = SignInData;

export type SimpleSignInProps = {
  redirectUri: string;
  token: string;
};

export  type SimpleSignUpProps = SimpleSignInProps & {
  nickname: string;
};

export type SimpleSignInData = SignInData;
export type SimpleSignUpData = SignUpData;

// Oauth Types
export type OauthProps = {
  appKey: string;
  provider: string;
};

export type OauthData = {
  id: number;
  provider: string;
  teamId: string;
  appKey: string;
  createdAt: string;
  updatedAt: string;
};

// User Types
export type UsersProps = {
  description: string;
  nickname: string;
  image: string;
};

export type FolloweesData = {
  nextCursor: number;
  list: Followees[];
}

export type Followees = {
  followee: FollowData;
  id: number;
}

export type FollowersData = {
  nextCursor: number;
  list: Followers[];
}

export type Followers = {
  follower: FollowData;
  id: number;
}

export type FollowData = {
  updatedAt: string;
  createdAt: string;
  teamId: string;
  image: string;
  description: string;
  nickname: string;
  id: number;
}

// Reviews Types
export type ReviewsLikeProps = {
  productId: number;
  images: string[];
  content: string;
  rating: number;
}

export type ReviewsLikeData = ReviewData & {
  user: User;
  reviewImages: ReviewImage[];
  isLiked: boolean;
}

export type ReviewData = {
  id: number;
  rating: number;
  content: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  productId: number;
}

export type ReviewImage = {
  id: number;
  source: string;
}

export type User  = {
  id: number;
  nickname: string;
  image: string;
}

export type ReviewsCancelData = {
  user: User;
  reviewImages: ReviewImage[];
  productId: number;
  userId: number;
  updatedAt: string;
  createdAt: string;
  isLiked: boolean;
  likeCount: number;
  content: string;
  rating: number;
  id: number;
}

export type ReviewsPatchProps = {
  images: ReviewImage[];
  content: string;
  rating: number;
}

export type ReviewsPatchData = ReviewsCancelData

// Products Types
export type ProductsProps = {
  categoryId: number;
  image: string;
  description: string;
  name: string;
}

export type ProductListData = {
  nextCursor: number;
  list: Product[];
}

export type Product = {
  id: number;
  name: string;
  image: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  writerId: number;
  categoryId: number;
  favoriteCount: number;
  reviewCount: number;
}

export type ProductData = Product & {
  description: string;
  teamId: string;
  category: Category;
  isFavorite: boolean;
  categoryMetric: CategoryMetric;
}

interface CategoryMetric {
  rating: number;
  reviewCount: number;
  favoriteCount: number;
}

interface Category {
  id: number;
  name: string;
}

export type ReviewListData = {
  nextCursor: number;
  list: ReviewList[];
}

export type ReviewList = ReviewData & {
  user: User;
  reviewImages: ReviewImage[];
  isLiked: boolean;
}

export type CategoryData = Category & {
  createdAt: string;
  updatedAt: string;
}

// // Profiles
// export type ProfilesProps = {
//   securityAnswer: string;
//   securityQuestion: string;
// };

// export type Profile = {
//   updatedAt: string;
//   job: string;
//   nationality: string;
//   city: string;
//   image: string;
//   code: string;
//   name: string;
//   id: number;
// };

// export type ProfilesData = Profile & {
//   securityQuestion: string;
//   teamId: string;
//   content: string;
//   family: string;
//   bloodType: string;
//   nickname: string;
//   birthday: string;
//   sns: string;
//   mbti: string;
// };

// export type ProfileListData = {
//   totalCount: number;
//   list: ProfilesData[];
// };

// export type ProfilesCodeProps = {
//   securityAnswer?: string;
//   securityQuestion?: string;
//   nationality?: string;
//   family?: string;
//   bloodType?: string;
//   nickname?: string;
//   birthday?: string;
//   sns?: string;
//   job?: string;
//   mbti?: string;
//   city?: string;
//   image?: string;
//   content?: string;
// };

// export type ProfilesCodePingData = {
//   registeredAt: string;
//   userId: number;
// };

// export type ProfilesCodePingProps = {
//   securityAnswer: string;
// };

// // Notification
// export type NotificationList = {
//   createdAt: string;
//   content: string;
//   id: number;
// };

// export type NotificationsData = {
//   totalCount: number;
//   list: NotificationList[];
// };

// export type NotificationsIdData = {
//   createdAt: string;
//   content: string;
//   id: number;
// };

export type ImageUploadData = {
  url: string;
};

export type ImageUploadProps = {
  file: File;
};

// // Comments
// export type CommentsProps = {
//   content: string;
// };

// export type CommentsWriter = {
//   image: string;
//   name: string;
//   id: number;
// };

// export type CommentsData = {
//   writer: CommentsWriter;
//   updatedAt: string;
//   createdAt: string;
//   content: string;
//   id: number;
// };

// export type CommentsListData = {
//   nextCursor: number;
//   list: CommentsData[];
// };

// export type CommentsIdData = {
//   id: number;
// };

// // Articles
// export type ArticlesProps = {
//   image?: string;
//   content: string;
//   title: string;
// };

// export type ArticlesWriter = {
//   name: string;
//   id: number;
// };

// export type ArticlesData = {
//   updatedAt: string;
//   createdAt?: string;
//   likeCount: number;
//   writer: ArticlesWriter;
//   image: string;
//   title: string;
//   id: number;
// };

// export type ArticlesListData = {
//   totalCount: number;
//   list: ArticlesData[];
// };

// export type ArticlesDetailData = ArticlesData & {
//   isLiked: boolean;
//   content: string;
// };

// export type ArticlesIdData = {
//   id: number;
// };

// export type ArticlesIdLikeData = ArticlesData & {
//   isLiked: boolean;
//   content: string;
// };
