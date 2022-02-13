
class ImageUpload {
  static url = "https://api.cloudinary.com/v1_1/koreachief/auto/upload";

  uploadSingleImage = async (imageData) => {
    const formData = new FormData();
    
    formData.append("file", imageData )
    formData.append("upload_preset", "xriivumv")
    
    // fetch(this.uploadImageurl, {
    //   method: "POST",
    //   body: formData
    // }).then((res) => {
    //   return res.json();
    // })

    const res = await fetch(ImageUpload.url, {
      method: "POST",
      body: formData
    })

//then 붙어 있던것들은 다 await으로 하나씩 붙여줘야 된다 
    return await res.json();

  }  

  uploadMultipleImage = async(multipleImageData) => {


    const formData = new FormData();
    const arrayImages = []
    for (let i = 0; i < multipleImageData.length; i++) {
      let imageData = multipleImageData[i];

    formData.append("file", imageData)
    formData.append("upload_preset", "xriivumv")
    const res = await fetch(ImageUpload.url, {
      method: "POST",
      body: formData
    })
  
    const res2 = await res.json();
    arrayImages.push(res2)
  }
  
  return arrayImages

}





}
export default ImageUpload
















