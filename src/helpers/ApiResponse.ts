class ApiResponse {
  /**
   * KODE RESPONSE 201
   */
  public static response200<T>(data: any, message: string) {
    return {
      status: true,
      message: message,
      data: data,
    };
  }

  /**
   * KODE RESPONSE 201
   */
  static response201<T>(message: string) {
    return {
      status: true,
      message: message,
    };
  }

  /**
   * KODE RESPONSE 400
   */
  static response400<T>(data: T, message: string) {
    return {
      status: true,
      message: message,
      data: data,
    };
  }

  /**
   * KODE RESPONSE 401
   */
  static response401<T>(data: T, message: string) {
    return {
      status: true,
      message: message,
      data: data,
    };
  }

  /**
   * KODE RESPONSE 403
   */
  static response403<T>(data: T, message: string) {
    return {
      status: true,
      message: message,
      data: data,
    };
  }

  /**
   * KODE RESPONSE 404
   */
  static response404<T>(data: T, message: string) {
    return {
      status: true,
      message: message,
      data: data,
    };
  }

  /**
   * KODE RESPONSE 500
   */
  public static response500<T>(message: string) {
    return {
      status: false,
      message: message,
    };
  }
}

export default ApiResponse;
