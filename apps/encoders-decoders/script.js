/* eslint-disable no-undef */
window.onload = () => {
  const sourceUrl = document.querySelector('#source-url');
  const encodedUrlResult = document.querySelector('#encoded-url');
  const urlEncodeButton = document.querySelector('#url-encode');

  urlEncodeButton.onclick = () => {
    encodedUrlResult.value = encodeURI(sourceUrl.value);
  };

  const sourceEncodedUrl = document.querySelector('#source-encoded-url');
  const decodedUrlResult = document.querySelector('#decoded-url');
  const urlDecodeButton = document.querySelector('#url-decode');

  urlDecodeButton.onclick = () => {
    decodedUrlResult.value = decodeURI(sourceEncodedUrl.value);
  };

  const sourceStr = document.querySelector('#source-str');
  const encodedStrResult = document.querySelector('#encoded-str');
  const strEncodeButton = document.querySelector('#base64-encode');

  strEncodeButton.onclick = () => {
    encodedStrResult.value = btoa(sourceStr.value);
  };

  const sourceDecodedUrl = document.querySelector('#source-encoded-str');
  const decodedStrResult = document.querySelector('#decoded-str');
  const strDecodeButton = document.querySelector('#str-decode');

  strDecodeButton.onclick = () => {
    decodedStrResult.value = atob(sourceDecodedUrl.value);
  };

  const hashSource = document.querySelector('#hash-source');
  const hashGeneratorButton = document.querySelector('#hash-generator');
  const md5Result = document.querySelector('#md5');
  const sha1Result = document.querySelector('#sha1');
  const sha256esult = document.querySelector('#sha256');
  const sha512Result = document.querySelector('#sha512');

  hashGeneratorButton.onclick = () => {
    md5Result.value = CryptoJS.MD5(hashSource.value);
    sha1Result.value = CryptoJS.SHA1(hashSource.value);
    sha256esult.value = CryptoJS.SHA256(hashSource.value);
    sha512Result.value = CryptoJS.SHA512(hashSource.value);
  };
};
