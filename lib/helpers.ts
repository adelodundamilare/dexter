export default class Helpers {
  static formatDate(dateStr: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", options);
  }
}
