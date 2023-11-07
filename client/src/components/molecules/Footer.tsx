import React from "react";

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <div className="bg-gray-50 text-gray-600 p-3 text-sm text-center">
      データの出所:{" "}
      <a
        href="https://duet.doshisha.ac.jp/kokai/html/fi/fi020/FI02001G.html"
        className="text-purple-600"
      >
        [https://duet.doshisha.ac.jp/kokai/html/fi/fi020/FI02001G.html]
      </a>
      。 データは適切な手法で収集され、プライバシーに配慮して処理されています。
    </div>
  );
};

export default Footer;
