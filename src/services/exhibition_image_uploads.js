class ExhibitionImageUpload {
  static url = 'https://api.cloudinary.com/v1_1/koreachief/auto/upload';

  uploadSingleImage = async (imageData) => {
    const formData = new FormData();

    formData.append('file', imageData);
    formData.append('upload_preset', 'lj67huqj');

    const res = await fetch(ExhibitionImageUpload.url, {
      method: 'POST',
      body: formData,
    });

    return await res.json();
  };

  uploadMultipleImage = async (multipleImageData) => {
    const formData = new FormData();
    const arrayImages = [];
    for (let i = 0; i < multipleImageData.length; i++) {
      let imageData = multipleImageData[i];

      formData.append('file', imageData);
      formData.append('upload_preset', 'lj67huqj');
      const res = await fetch(ExhibitionImageUpload.url, {
        method: 'POST',
        body: formData,
      });

      const res2 = await res.json();
      arrayImages.push(res2);
    }

    return arrayImages;
  };
}
export default ExhibitionImageUpload;
