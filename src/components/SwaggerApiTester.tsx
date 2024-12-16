'use client'

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Menu,
  MenuItem,
} from '@mui/material'
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState, useEffect } from 'react'
import JsonView from '@uiw/react-json-view';
import { lightTheme } from '@uiw/react-json-view/light';

import {
  ActionType,
  UserData, UsersProps, FolloweesData, FollowersData,
  ReviewsLikeProps, ReviewsLikeData, ReviewListData, ReviewsCancelData, ReviewData, ReviewsPatchProps, ReviewsPatchData,
  ProductListData, ProductsProps, ProductData,
  OauthProps, OauthData,
  ImageUploadProps, ImageUploadData,
  User,
  CategoryData,
  SignUpProps, SignUpData, SignInProps, SignInData, SimpleSignUpProps, SimpleSignUpData, SimpleSignInProps, SimpleSignInData
} from '@/api/swagger/Mogazoa.types';

import {
  getUsersMe,
  patchUsersMe,
  getUsersRanking,
  getUsersInfo,
  getUsersProducts,
  getUsersReviews,
  getUsersLikes,
  getUsersFollowing,
  getUsersFollowers,
} from '@/api/swagger/User'
import {
  postReviewsLike,
  deleteReviewsLike,
  postReviews,
  deleteReviews,
  patchReviews,
} from '@/api/swagger/Review'
import {
  getProducts,
  postProducts,
  getProductsDetail,
  patchProducts,
  deleteProducts,
  getProductsReviews,
  postProductsFavorite,
  deleteProductsFavorite,
} from '@/api/swagger/Product'
import {
  postOauthApps,
} from '@/api/swagger/Oauth'
import {
  postImagesUpload,
} from '@/api/swagger/Image'
import {
  postFollow,
  deleteFollow,
} from '@/api/swagger/Follow'
import {
  getCategories,
} from '@/api/swagger/Category'
import {
  postSignUp,
  postSignIn,
  postSignUpProvider,
  postSignInProvider,
} from '@/api/swagger/Auth'
import { getUserId } from '@/api/swagger/CheckSign';

//TODO: 기본 사용법
// 회원정보가 없는경우 SignUp으로 회원가입 테스트 
// 모든 테스트는 SignIn으로 로그인 후 가능(일부 테스트 제외: Category, 등)

export const SwaggerApiTester = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [result, setResult] = useState<object>({});

  /** USER API TEST */
  const onClickUser = async (action: ActionType) => {
    handleClose()
    console.log('USER API TEST')
    let res;

    //TODO: 아래 정보를 변경하여 테스트 해 주십시요.
    const usersProps: UsersProps = {
      description: '',
      nickname: '',
      image: ''
    }
    
    //TODO: 아래 정보를 변경하여 테스트 해 주십시요.
    //디폴트로 현재 로그인 사용자ID를 가져옵니다.
    const userId = getUserId() ?? ''

    try {
      switch (action) {
        case ActionType.GETUSERSME:
          res = await getUsersMe() as UserData
          break
        case ActionType.PATCHUSERSME:
          res = await patchUsersMe(usersProps) as UserData
          break
        case ActionType.GETUSERSRANKING:
          res = await getUsersRanking() as UserData[]
          break
        case ActionType.GETUSERSINFO:
          res = await getUsersInfo(userId) as UserData
          break
        case ActionType.GETUSERSPRODUCTS:
          res = await getUsersProducts(userId) as ProductListData
          break
        case ActionType.GETUSERSREVIEWS:
          res = await getUsersReviews(userId) as ProductListData
          break
        case ActionType.GETUSERSLIKES:
          res = await getUsersLikes(userId) as ProductListData
          break
        case ActionType.GETUSERSFOLLOWING:
          res = await getUsersFollowing(userId) as FolloweesData
          break
        case ActionType.GETUSERSFOLLOWERS:
          res = await getUsersFollowers(userId) as FollowersData
          break
        default:
          break
      }
      console.log(JSON.stringify(res))
      setResult(res as object)
    } catch (error) {
      console.error('Error:', error)
      setResult(error as object)
    }
  }

  /** REVIEW API TEST */
  const onClickReview = async (action: ActionType) => {
    handleClose()
    console.log('REVIEW API TEST')
    let res;

    //TODO: 아래 정보를 변경하여 테스트 해 주십시요.
    const reviewId = 1
    //TODO: 아래 정보를 변경하여 테스트 해 주십시요.
    const reviewsLikeProps: ReviewsLikeProps = {
      productId: 1,
      images: ['', ''],
      content: '',
      rating: 1
    }
    //TODO: 아래 정보를 변경하여 테스트 해 주십시요.
    const reviewsPatchProps: ReviewsPatchProps = {
      images: [{ id: 1, source: '' }, { id: 2, source: '' }],
      content: '',
      rating: 1
    }
    try {
      switch (action) {
        case ActionType.POSTREVIEWSLIKE:
          res = await postReviewsLike(reviewId, reviewsLikeProps) as ReviewsLikeData
          break
        case ActionType.DELETEREVIEWSLIKE:
          res = await deleteReviewsLike(reviewId) as ReviewsCancelData
          break
        case ActionType.POSTREVIEWS:
          res = await postReviews(reviewsLikeProps) as ReviewsLikeData
          break
        case ActionType.DELETEREVIEWS:
          res = await deleteReviews(reviewId) as ReviewData
          break
        case ActionType.PATCHREVIEWS:
          res = await patchReviews(reviewId, reviewsPatchProps) as ReviewsPatchData
          break
        default:
          break
      }
      console.log(JSON.stringify(res))
      setResult(res as object)
    } catch (error) {
      console.error('Error:', error)
      setResult(error as object)
    }
  }

  /** PRODUCT API TEST */
  const onClickProduct = async (action: ActionType) => {
    handleClose()
    console.log('PRODUCT API TEST')
    let res;

    //TODO: 아래 정보를 변경하여 테스트 해 주십시요.
    const productId = 1
    const keyword = ""
    const category = 1
    const order = "recent"
    const cursor = 1
    const productsProps: ProductsProps = {
      categoryId: 1,
      image: '',
      description: '',
      name: '',
    }

    try {
      switch (action) {
        case ActionType.GETPRODUCTS:
          res = await getProducts(keyword, category, order, cursor) as ProductListData
          break
        case ActionType.POSTPRODUCTS:
          res = await postProducts(productsProps) as ProductData
          break
        case ActionType.GETPRODUCTSDETAIL:
          res = await getProductsDetail(productId) as ProductData
          break
        case ActionType.PATCHPRODUCTS:
          res = await patchProducts(productId, productsProps) as ProductData
          break
        case ActionType.DELETEPRODUCTS:
          res = await deleteProducts(productId) as ProductData
          break
        case ActionType.GETPRODUCTSREVIEWS:
          res = await getProductsReviews(productId, order, cursor) as ReviewListData
          break
        case ActionType.POSTPRODUCTSFAVORITE:
          res = await postProductsFavorite(productId) as ProductData
          break
        case ActionType.DELETEPRODUCTSFAVORITE:
          res = await deleteProductsFavorite(productId) as ProductData
          break
        default:
          break
      }
      console.log(JSON.stringify(res))
      setResult(res as object)
    } catch (error) {
      console.error('Error:', error)
      setResult(error as object)
    }
  }

  /** OAUTH API TEST */
  const onClickOauth = async (action: ActionType) => {
    handleClose()
    console.log(' OAUTH API TEST')
    let res;

    //TODO: 아래 정보를 변경하여 테스트 해 주십시요.
    const oauthProps: OauthProps = {
      appKey: '',
      provider: '',
    }

    try {
      switch (action) {
        case ActionType.POSTOAUTHAPPS:
          res = await postOauthApps(oauthProps) as OauthData
          break
        default:
          break
      }
      console.log(JSON.stringify(res))
      setResult(res as object)
    } catch (error) {
      console.error('Error:', error)
      setResult(error as object)
    }
  }

  /** IMAGE API TEST */
  const onClickImage = async (action: ActionType) => {
    handleClose()
    console.log('IMAGE API TEST')
    let res;

    //TODO: 아래 정보를 변경하여 테스트 해 주십시요.
    const imageUploadProps: ImageUploadProps = {
      file: new File(["foo"], "foo.txt", { type: "text/plain", }),
    }

    try {
      switch (action) {
        case ActionType.POSTIMAGESUPLOAD:
          res = await postImagesUpload(imageUploadProps) as ImageUploadData
          break
        default:
          break
      }
      console.log(JSON.stringify(res))
      setResult(res as object)
    } catch (error) {
      console.error('Error:', error)
      setResult(error as object)
    }
  }

  /** FOLLOW API TEST */
  const onClickFollow = async (action: ActionType) => {
    handleClose()
    console.log('FOLLOW API TEST')
    let res;

    //TODO: 아래 정보를 변경하여 테스트 해 주십시요.
    const user: User = {
      id: 1,
      nickname: '',
      image: '',
    }

    try {
      switch (action) {
        case ActionType.POSTFOLLOW:
          res = await postFollow(user) as UserData
          break
        case ActionType.DELETEFOLLOW:
          res = await deleteFollow(user) as UserData
          break
        default:
          break
      }
      console.log(JSON.stringify(res))
      setResult(res as object)
    } catch (error) {
      console.error('Error:', error)
      setResult(error as object)
    }
  }

  /** CATEGORY API TEST */
  const onClickCategory = async (action: ActionType) => {
    handleClose()
    console.log('CATEGORY API TEST')
    let res;

    try {
      switch (action) {
        case ActionType.GETCATEGORIES:
          res = await getCategories() as CategoryData[]
          break
        default:
          break
      }
      console.log(JSON.stringify(res))
      setResult(res as object)
    } catch (error) {
      console.error('Error:', error)
      setResult(error as object)
    }
  }

  /** AUTH API TEST */
  const onClickAuth = async (action: ActionType) => {
    handleClose()
    console.log('AUTH API TEST')
    let res;

    //TODO: 아래 정보를 변경하여 테스트 해 주십시요.
    const signUpProps: SignUpProps = {
      email: '',
      nickname: '',
      password: '',
      passwordConfirmation: '',
    }
    //TODO: 아래 정보를 변경하여 테스트 해 주십시요.
    const signInProps: SignInProps = {
      email: '',
      password: '',
    }
    //TODO: 아래 정보를 변경하여 테스트 해 주십시요.
    const simpleSignUpProps: SimpleSignUpProps = {
      redirectUri: '',
      token: '',
      nickname: '',
    }
    //TODO: 아래 정보를 변경하여 테스트 해 주십시요.
    const simpleSignInProps: SimpleSignInProps = {
      redirectUri: '',
      token: '',
    }
    //TODO: 아래 정보를 변경하여 테스트 해 주십시요.
    const provider = ''

    try {
      switch (action) {
        case ActionType.POSTSIGNUP:
          res = await postSignUp(signUpProps) as SignUpData
          break
        case ActionType.POSTSIGNIN:
          res = await postSignIn(signInProps) as SignInData
          break
        case ActionType.POSTSIGNUPPROVIDER:
          res = await postSignUpProvider(provider, simpleSignUpProps) as SimpleSignUpData
          break
        case ActionType.POSTSIGNINPROVIDER:
          res = await postSignInProvider(provider, simpleSignInProps) as SimpleSignInData
          break
        default:
          break
      }
      console.log(JSON.stringify(res))
      setResult(res as object)
    } catch (error) {
      console.error('Error:', error)
      setResult(error as object)
    }
  }

  return (
    <div>
      <AppBar position='static' color='transparent'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <PetsOutlinedIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Mogajoa Api
          </Typography>

          {/* Navbar Buttons */}
          <Stack direction='row' spacing={2}>
            <Button color='inherit'
              id='btnUser'
              aria-controls={open ? 'menuUser' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleClick}>User</Button>
            <Button color='inherit'
              id='btnReview'
              aria-controls={open ? 'menuReview' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleClick}>Review</Button>
            <Button color='inherit'
              id='btnProduct'
              aria-controls={open ? 'menuProduct' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleClick}>Product</Button>
            <Button color='inherit'
              id='btnOauth'
              aria-controls={open ? 'menuOauth' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleClick}>Oauth</Button>
            <Button color='inherit'
              id='btnImage'
              aria-controls={open ? 'menuImage' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleClick}>Image</Button>
            <Button color='inherit'
              id='btnFollow'
              aria-controls={open ? 'menuFollow' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleClick}>Follow</Button>
            <Button color='inherit'
              id='btnCategory'
              aria-controls={open ? 'menuCategory' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleClick}>Category</Button>
            <Button color='inherit'
              id='btnAuth'
              aria-controls={open ? 'menuAuth' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleClick}>Auth</Button>
          </Stack>


          {/* Each Buttons Sub Menu */}
          <Menu id='menuUser'
            anchorEl={anchorEl}
            open={open && anchorEl === document.getElementById('btnUser')}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            MenuListProps={{
              'aria-labelledby': 'btnUser'
            }}>
            <MenuItem onClick={() => onClickUser(ActionType.GETUSERSME)}>내 정보 조회</MenuItem>
            <MenuItem onClick={() => onClickUser(ActionType.PATCHUSERSME)}>내 정보 수정</MenuItem>
            <MenuItem onClick={() => onClickUser(ActionType.GETUSERSRANKING)}>유저 랭킹 조회</MenuItem>
            <MenuItem onClick={() => onClickUser(ActionType.GETUSERSINFO)}>유저 정보 조회</MenuItem>
            <MenuItem onClick={() => onClickUser(ActionType.GETUSERSPRODUCTS)}>유저가 생성한 상품 조회</MenuItem>
            <MenuItem onClick={() => onClickUser(ActionType.GETUSERSREVIEWS)}>유저가 리뷰한 상품 조회</MenuItem>
            <MenuItem onClick={() => onClickUser(ActionType.GETUSERSLIKES)}>유저가 찜한 상품 조회</MenuItem>
            <MenuItem onClick={() => onClickUser(ActionType.GETUSERSFOLLOWING)}>유저가 팔로우한 유저 조회</MenuItem>
            <MenuItem onClick={() => onClickUser(ActionType.GETUSERSFOLLOWERS)}>유저를 팔로우한 유저 조회</MenuItem>        </Menu>
          <Menu id='menuReview'
            anchorEl={anchorEl}
            open={open && anchorEl === document.getElementById('btnReview')}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            MenuListProps={{
              'aria-labelledby': 'btnReview'
            }}>
            <MenuItem onClick={() => onClickReview(ActionType.POSTREVIEWSLIKE)}>리뷰 좋아요</MenuItem>
            <MenuItem onClick={() => onClickReview(ActionType.DELETEREVIEWSLIKE)}>리뷰 좋아요 취소</MenuItem>
            <MenuItem onClick={() => onClickReview(ActionType.POSTREVIEWS)}>리뷰 생성</MenuItem>
            <MenuItem onClick={() => onClickReview(ActionType.DELETEREVIEWS)}>리뷰 삭제</MenuItem>
            <MenuItem onClick={() => onClickReview(ActionType.PATCHREVIEWS)}>리뷰 수정</MenuItem>
          </Menu>
          <Menu id='menuProduct'
            anchorEl={anchorEl}
            open={open && anchorEl === document.getElementById('btnProduct')}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            MenuListProps={{
              'aria-labelledby': 'btnProduct'
            }}>
            <MenuItem onClick={() => onClickProduct(ActionType.GETPRODUCTS)}>상품 목록 조회</MenuItem>
            <MenuItem onClick={() => onClickProduct(ActionType.POSTPRODUCTS)}>상품 생성</MenuItem>
            <MenuItem onClick={() => onClickProduct(ActionType.GETPRODUCTSDETAIL)}>상품 상세 조회</MenuItem>
            <MenuItem onClick={() => onClickProduct(ActionType.PATCHPRODUCTS)}>상품 수정</MenuItem>
            <MenuItem onClick={() => onClickProduct(ActionType.DELETEPRODUCTS)}>상품 삭제</MenuItem>
            <MenuItem onClick={() => onClickProduct(ActionType.GETPRODUCTSREVIEWS)}>상품 리뷰 목록 조회</MenuItem>
            <MenuItem onClick={() => onClickProduct(ActionType.POSTPRODUCTSFAVORITE)}>상품 찜하기</MenuItem>
            <MenuItem onClick={() => onClickProduct(ActionType.DELETEPRODUCTSFAVORITE)}>상품 찜하기 취소</MenuItem>
          </Menu>
          <Menu id='menuOauth'
            anchorEl={anchorEl}
            open={open && anchorEl === document.getElementById('btnOauth')}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            MenuListProps={{
              'aria-labelledby': 'btnOauth'
            }}>
            <MenuItem onClick={() => onClickOauth(ActionType.POSTOAUTHAPPS)}>간편 로그인 App 등록/수정</MenuItem>
          </Menu>
          <Menu id='menuImage'
            anchorEl={anchorEl}
            open={open && anchorEl === document.getElementById('btnImage')}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            MenuListProps={{
              'aria-labelledby': 'btnImage'
            }}>
            <MenuItem onClick={() => onClickImage(ActionType.POSTIMAGESUPLOAD)}>이미지 업로드</MenuItem>
          </Menu>
          <Menu id='menuFollow'
            anchorEl={anchorEl}
            open={open && anchorEl === document.getElementById('btnFollow')}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            MenuListProps={{
              'aria-labelledby': 'btnFollow'
            }}>
            <MenuItem onClick={() => onClickFollow(ActionType.POSTFOLLOW)}>유저 팔로우</MenuItem>
            <MenuItem onClick={() => onClickFollow(ActionType.DELETEFOLLOW)}>유저 언팔로우</MenuItem>
          </Menu>
          <Menu id='menuCategory'
            anchorEl={anchorEl}
            open={open && anchorEl === document.getElementById('btnCategory')}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            MenuListProps={{
              'aria-labelledby': 'btnCategory'
            }}>
            <MenuItem onClick={() => onClickCategory(ActionType.GETCATEGORIES)}>상품 카테고리 조회</MenuItem>
          </Menu>
          <Menu id='menuAuth'
            anchorEl={anchorEl}
            open={open && anchorEl === document.getElementById('btnAuth')}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            MenuListProps={{
              'aria-labelledby': 'btnAuth'
            }}>
            <MenuItem onClick={() => onClickAuth(ActionType.POSTSIGNUP)}>회원가입</MenuItem>
            <MenuItem onClick={() => onClickAuth(ActionType.POSTSIGNIN)}>로그인</MenuItem>
            <MenuItem onClick={() => onClickAuth(ActionType.POSTSIGNUPPROVIDER)}>간편 회원가입</MenuItem>
            <MenuItem onClick={() => onClickAuth(ActionType.POSTSIGNINPROVIDER)}>간편 로그인</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <div style={{ marginTop: 16 }}>
        {isClient && (
          <JsonView value={result} style={lightTheme} />
        )}
      </div>
    </div>
  )
}
