import { View, Text, FlatList } from "react-native";
import React from "react";
import raceRankingResponse from "../../../../assets/data/race-rankings.json";
import RankingListItem from "../../../components/RankingListItem";

const raceRanking = raceRankingResponse.data.raceRankings.response;

const QualifyingScreen = () => {
  return (
    <FlatList
      data={raceRanking}
      renderItem={({ item }) => <RankingListItem item={item} />}
    />
  );
};

export default QualifyingScreen;
