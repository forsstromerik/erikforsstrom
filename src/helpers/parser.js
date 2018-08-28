const KEYS = {
  PROFILE_IMAGE: 'profileImage',
  HEADER_IMAGE: 'headerImage',
  SHORT_DESCRIPTION: 'shortDescription',
  RESUME: 'resume'
}

export const parser = obj => {
  if(obj[KEYS.PROFILE_IMAGE]){
    return ({ 
      cardInfo: {
        age: obj.age,
        email: obj.email,
        name: obj.name,
        occupation: obj.occupation,
        occupation2: obj.occupation2,
        profileImageURL: obj.profileImage.fields.file.url
      }
    });
  } 
  else if (obj[KEYS.HEADER_IMAGE]) {
    return ({
        headerImageURL: obj.headerImage.fields.file.url
    });
  }
  else if (obj[KEYS.SHORT_DESCRIPTION]){
    return ({
      shortDescription: [...obj.shortDescription.split('\n')]
    });
  }
  else if (obj[KEYS.RESUME]){
    return({
      resumeURL: `https:${obj.resume.fields.file.url}`
    });
  }
  else {
    return null;
  }
}