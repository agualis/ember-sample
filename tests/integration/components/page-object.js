export class PageObject {

  constructor(subject) {
    this.subject = subject
  }

  text() {
    return this.subject.$()['0'].innerHTML
  }
}
