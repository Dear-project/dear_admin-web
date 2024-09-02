class ConvertText {
  public omissionText(text: string) {
    if (text?.length >= 7) {
      return text.substring(0, 7) + "...";
    } else {
      return text;
    }
  }
}

export default new ConvertText();
