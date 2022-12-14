import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
const { Kakao } = window;

const CustomBtnStyle = {
  width: 220,
  fontSize: "25px",
  color: "white",
  fontWeight: 700,
  marginBlock: 10,
};

const KakaoShareButton = ({ data }) => {
  const url = "https://whataboutthis.netlify.app/";
  const resultUrl = window.location.href;

  useEffect(() => {
    Kakao.init("a35958150ee7261fc42d480a03af3461");
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "๐ป ๋ธํธ๋ถ ์ถ์ฒ ๊ฒฐ๊ณผ",
        description: `๋น์ ์๊ฒ ${data.name}์(๋ฅผ) ์ถ์ฒํฉ๋๋ค.`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: "๋๋ ํ์คํธํ๋ฌ๊ฐ๊ธฐ",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <Button onClick={shareKakao} variant="warning" style={CustomBtnStyle}>
      ์นด์นด์คํก ๊ณต์ ํ๊ธฐ
    </Button>
  );
};

export default KakaoShareButton;
