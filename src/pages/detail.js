import ProductCard from "../components/productCard";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../section/comment";

function extractVideoId(link) {
  if (!link) {
    return null;
  }

  const regex = /[?&]v=([^&]+)/;
  const match = link.match(regex);
  return match ? match[1] : null;
}

function DetailPage() {
  const [product, setProduct] = useState([]);
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://tokopedia-play.hop.sh/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  useEffect(() => {
    fetch(`https://tokopedia-play.hop.sh/videos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVideo(data);
      });
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-row gap-4">
        <div>
          {product.map((product) => (
            <ProductCard
              key={product.id}
              link={product.link}
              title={product.title}
              imageUrl={product.imageUrl}
              price={product.price}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-lg overflow-hidden">
            {video && (
              <div>
                <iframe
                  width="1000"
                  height="500"
                  src={`https://www.youtube.com/embed/${extractVideoId(
                    video.link
                  )}`}
                  title="YouTube Video Player"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
          <div className="bg-neutral-900">
            <CommentSection videoId={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
