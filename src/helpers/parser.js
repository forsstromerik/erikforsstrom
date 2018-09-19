const KEYS = {
  PROFILE_IMAGE: 'businessCard',
  HEADER_IMAGE: 'header',
  SHORT_DESCRIPTION: 'description',
  RESUME: 'resume',
  TIMELINE_ELEMENT: 'timelineElement',
  FOOTER: 'footer'
}

export const parser = (res) => {
  let data = {
    cardInfo: {
      age: '',
      email: '',
      name: '',
      occupation: '',
      occupation2: '',
      profileImageURL: ''
    },
    headerImageURL: '',
    shortDescription: [],
    resumeURL: '',
    elements: [],
    footer: {
      quote: '',
      info: ''
    }
  };

  res.items.forEach(obj => {
    if (obj.sys.contentType.sys.id === KEYS.PROFILE_IMAGE){
      data["cardInfo"] = {
        age: obj.fields.age,
        email: obj.fields.email,
        name: obj.fields.name,
        occupation: obj.fields.occupation,
        occupation2: obj.fields.occupation2,
        profileImageURL: obj.fields.profileImage.fields.file.url
      }
    }
    else if (obj.sys.contentType.sys.id === KEYS.HEADER_IMAGE) {
      data["headerImageURL"] = obj.fields.headerImage.fields.file.url
    }
    else if (obj.sys.contentType.sys.id === KEYS.SHORT_DESCRIPTION){
      data["shortDescription"] = [...obj.fields.shortDescription.split('\n')]
    }
    else if (obj.sys.contentType.sys.id === KEYS.RESUME){
      data["resumeURL"] = `https:${obj.fields.resume.fields.file.url}`
    }
    else if (obj.sys.contentType.sys.id === KEYS.TIMELINE_ELEMENT){
      data["elements"].push(
        {
          imageURL: obj.fields.image.fields.file.url,
          year: obj.fields.year,
          title: obj.fields.title,
          description: obj.fields.description,
          order: obj.fields.order
        }
      );
    }
    else if (obj.sys.contentType.sys.id === KEYS.FOOTER) {
      data["footer"] = {
        quote: obj.fields.quote,
        info: obj.fields.info
      }
    }
  })
  data["elements"].sort((a,b) =>  b.order - a.order);
  
  return data;
}
