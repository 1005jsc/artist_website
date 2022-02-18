export{}

export type HandleLoginType = (password:string|number) => boolean;


// 여기 다시한번 다루기
export type LoginContextType = {
  handleLogin: HandleLoginType,
  loginState: boolean
  

}

export type AllImageOrPhotoList = 
'exhibitionPosterUrl'|'exhibitionWorks'|
'exhibitionBuildingPhotoUrl'|
'exhibitionPhotoUrl'|'workPhotoUrl'

export type TypeOfPhotoAssets = {
  [index:number]: string
}

export type TypeOfWorks = {
  [index:number]: TypeOfWork
}

export type TypeOfHorizontalOrVertical = 'horizontal'|'vertical'|null

export type TypeOfSoldNotSold = 'not_sold'|'sold'|null;


// 전시 타입 

export type TypeOfExhibition = {

  exhibitionSerialNumber: number;
  lastUpdate:number|string|null;
  exhibitionPosterUrl: TypeOfPhotoAssets|null;
  exhibitionName:string|null;
  exhibitionLocation: string|null;
  exhibitionPeriod:string|null;
  exhibitionSponser:string|null;
  exhibitionWorks: TypeOfWorks|null;
  exhibitionBuildingPhotoUrl:TypeOfPhotoAssets|null;
  exhibitionPhotoUrl: TypeOfPhotoAssets|null;
  exhibitionMemo: string|null;


}



// work 타입 

export type TypeOfWork = {
  workSerialNumber: number;
  lastUpdate:number|string|null;
  workImageUrl: TypeOfPhotoAssets|null;
  workName:string|null;
  workCompletionDate:string|number|null;
  workSize:string|null;
  workMaterial:string|null;
  workOnSale: TypeOfSoldNotSold|null;
  workSold:TypeOfWorkSold|null;
  workExhibitionHistory:TypeOfExhibitionHistory|null;
  workMemo: string|null
  workHorizontalOrVertical: TypeOfHorizontalOrVertical;
}



export type TypeOfWorkSold = {
  buyerName:string|null;
  buyerPhoneNumber:string|number|null;
  buyerEmail:string|null; 
  purchaseLocation: string|null;
  purchaseDate:string|number|null;
  purchasePrize:string|number|null;
}

export type TypeOfExhibitionHistory = {
  [exhibitionName:string]: number|null;
}


// image

export type ImageQualityTypes = 'mini'|'small'|'medium'|'large'|'full-screen'|'almost-original'






















