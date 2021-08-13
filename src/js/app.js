class ErrorRepository {
  constructor(repo) {
    this.repository = new Map(repo);
  }

  translate(code) {
    if (this.repository.has(code)) {
      return this.repository.get(code);
    }
    return 'Unknown error';
  }
}

export default ErrorRepository;
