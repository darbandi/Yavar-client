import React, { useEffect } from "react";
import SurahDetailsCard from "../../components/cards/surah-details/SurahDetailsCard";
import { isEmpty } from "lodash";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import useFavorites from "../../api/useFavorits";
import VerseItem from "../../components/verse-list/verse-item/VerseItem";
import "./Favorites.scss";
import { Link } from "react-router-dom";

const Verses = () => {
  const { data, loading, error, getFavorite } = useFavorites();

  useEffect(() => {
    getFavorite();
  }, []);

  if (!data) return null;
  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <div className="favorites">
      {!isEmpty(data) && (
        <SurahDetailsCard
          data={{
            surah_name: "علاقه مندی ها",
            description: `مجموع ${data?.length} مورد از علایق شما`,
          }}
          page=""
          type="favorites"
        />
      )}

      {data?.map((item) => {
        return (
          <div>
            <VerseItem data={item?.verse} noAction></VerseItem>
            <div className="surah-name">
              <Link to={`/verses/${item?.verse?.lesson?.id}#item-${item?.verse?.verse_id}`}>
                سوره {item?.verse?.lesson?.surah_name} -{" "}
                {item?.verse?.lesson?.verse_count} آیه
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Verses;
