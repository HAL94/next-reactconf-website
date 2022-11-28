export const getConfInfo = `*[_type == "conf"]{
    confName,
    confDescription,
    confStartDate,
    confEndDate,
    confLocation,
    confOpeningTimes,
    confCodeOfConduct,
    "images": {
        "imageKey": images[]->imageKey.current,
        "imageUrl": images[]->imageUrl.asset->url
    }
}`;

export const getSponserInfo = `*[_type == "sponser"]{
    _id,
    industry,
    sponserName,
    sponserCountry,
    "sponserImage": sponserImage.asset->url,
    "sponserTier": sponserTier->sponserTier.current
}`;

export const getExhibitorList = `*[_type == "exhibitor"]{
    _id,
    "exhibitorImage": exhibitorImage.asset->url,    
}`;

export const getSectorsList = `*[_type == "sector"]{
    _id,
    name,
    "image": image.asset->url,    
}`;

export const getSpeakers = `*[_type == "speaker"]{
    _id,
    name,
    sessionTitle,
    sessionDetails,
    "image": speakerImage.asset->url,    
}`;
