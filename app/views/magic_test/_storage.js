function initializeStorage(){
  if (sessionStorage.getItem("testingOutput") == null) {
    sessionStorage.setItem("testingOutput", JSON.stringify([]));
  }
}
