import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  TopBar,
  BackArrow,
  TabItem,
  TabSeparator,
  ContentPanel,
  SearchFilterRow,
  SearchBar,
  FilterRow,
  FilterChip,
  TeamBox,
  TeamGrid,
  TeamCard,
  TeamIcon,
  TeamCardName,
  PlayerLayout,
  PlayerList,
  PlayerListHeader,
  PlayerListHeaderCell,
  PlayerRow,
  PlayerCell,
  PlayerDetail,
  PlayerCard,
  PlayerPhoto,
  PlayerCardBody,
  PlayerCardName,
  PlayerClubIcons,
  ClubIcon,
  ActionButtons,
  ActionBtn,
  GOLD,
  LockScreen,
  LockTitle,
  LockSubtitle,
  LockDescription,
  LockInputRow,
  LockInput,
  LockButton,
  LockError,
} from "./MarketStyled";

const PLACEHOLDER_PHOTO = "https://via.placeholder.com/340x260/444/666?text=Player";

const TeamShield: React.FC<{ size?: number; color?: string }> = ({ size = 64, color = GOLD }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
    <path d="M18 2L4 10v8c0 8.5 5.5 16 14 18 8.5-2 14-9.5 14-18v-8L18 2z" fill={color} opacity="0.2" />
    <path d="M18 4L6 11v7c0 7.5 5 14 12 16 7-2 12-8.5 12-16v-7L18 4z" stroke={color} strokeWidth="1.5" fill="none" />
    <text x="18" y="21" textAnchor="middle" fill={color} fontSize="10" fontWeight="bold">T</text>
  </svg>
);

const SearchSvg = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
    <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M10.5 10.5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ArrowBackSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
);

const ListSvg = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14">
    <rect x="1" y="2" width="14" height="2" rx="1" />
    <rect x="1" y="7" width="14" height="2" rx="1" />
    <rect x="1" y="12" width="14" height="2" rx="1" />
  </svg>
);

const dummyPlayers = [
  { name: "NamePlayerLocalize", position: "COM" },
  { name: "NamePlayerLocalize", position: "COM" },
  { name: "NamePlayerLocalize", position: "COM" },
  { name: "NamePlayerLocalize", position: "COM" },
  { name: "NamePlayerLocalize", position: "COM" },
  { name: "NamePlayerLocalize", position: "COM" },
];

const teamNames = [
  "FC EAGLES", "LION FC", "WOLVES 11", "STAR UTD", "BEAR FC", "HAWKS FC",
  "TITANS", "DRAGON FC", "PANTHER", "SHARKS", "PHOENIX", "RAPID FC",
];

const Market: React.FC = () => {
  const [accesso, setAccesso] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState<"Team" | "Player">("Team");
  const navigate = useNavigate();

  if (accesso) {
    return (
      <LockScreen>
        <LockTitle>MARKET</LockTitle>
        <LockSubtitle>ACCESSO RISERVATO</LockSubtitle>
        <LockDescription>Inserisci la password per sviluppatori</LockDescription>
        <LockInputRow>
          <LockInput
            type="password"
            placeholder="password"
            maxLength={20}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (password === "Besteam1") {
                  setAccesso(false);
                } else {
                  setError(true);
                }
              }
            }}
          />
          <LockButton
            onClick={() => {
              if (password === "Besteam1") {
                setAccesso(false);
              } else {
                setError(true);
              }
            }}
          >
            OK
          </LockButton>
        </LockInputRow>
        {error && <LockError>Password errata</LockError>}
      </LockScreen>
    );
  }

  return (
    <PageWrapper>
      <TopBar>
        <BackArrow onClick={() => navigate(-1)}>
          <ArrowBackSvg />
        </BackArrow>
        <TabItem active={activeTab === "Team"} onClick={() => setActiveTab("Team")}>
          Team
        </TabItem>
        <TabSeparator>|</TabSeparator>
        <TabItem active={activeTab === "Player"} onClick={() => setActiveTab("Player")}>
          Player
        </TabItem>
      </TopBar>

      {activeTab === "Team" ? <MarketTeam /> : <MarketPlayer />}
    </PageWrapper>
  );
};

const MarketTeam: React.FC = () => {
  return (
    <ContentPanel>
      <SearchFilterRow>
        <SearchBar>
          <SearchSvg />
          <input type="text" placeholder="Search teams..." />
        </SearchBar>
        <FilterRow>
          <FilterChip active>TEAMS</FilterChip>
          <FilterChip>ALL</FilterChip>
          <FilterChip>RARE</FilterChip>
          <FilterChip>EPIC</FilterChip>
          <FilterChip>LEGENDARY</FilterChip>
        </FilterRow>
      </SearchFilterRow>

      <TeamBox>
        <TeamGrid>
          {teamNames.map((name, i) => {
            const isTopRow = i < 6;
            const hasBorder = i < 2;
            return (
              <TeamCard key={i} hasBorder={hasBorder}>
                <TeamIcon><TeamShield size={64} color={GOLD} /></TeamIcon>
                <TeamCardName>{name}</TeamCardName>
              </TeamCard>
            );
          })}
        </TeamGrid>
      </TeamBox>
    </ContentPanel>
  );
};

const MarketPlayer: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(dummyPlayers[0]);

  return (
    <ContentPanel>
      <SearchFilterRow>
        <SearchBar>
          <SearchSvg />
          <input type="text" placeholder="Search players..." />
        </SearchBar>
        <FilterRow>
          <FilterChip>TEAMS</FilterChip>
          <FilterChip active>PLAYER</FilterChip>
          <FilterChip>RARE</FilterChip>
          <FilterChip>EPIC</FilterChip>
          <FilterChip>LEGENDARY</FilterChip>
        </FilterRow>
      </SearchFilterRow>

      <PlayerLayout>
        <PlayerList>
          <PlayerListHeader>
            <PlayerListHeaderCell flex={0.4}><ListSvg /></PlayerListHeaderCell>
            <PlayerListHeaderCell flex={2}>Player Name</PlayerListHeaderCell>
            <PlayerListHeaderCell flex={1}>Position</PlayerListHeaderCell>
          </PlayerListHeader>
          {dummyPlayers.map((p, i) => (
            <PlayerRow key={i} onClick={() => setSelectedPlayer(p)}>
              <PlayerCell flex={0.4}><ListSvg /></PlayerCell>
              <PlayerCell flex={2}>{p.name}</PlayerCell>
              <PlayerCell flex={1}>{p.position}</PlayerCell>
            </PlayerRow>
          ))}
        </PlayerList>

        <PlayerDetail>
          <PlayerCard>
            <PlayerPhoto>
              <img src={PLACEHOLDER_PHOTO} alt="Player" />
            </PlayerPhoto>
            <PlayerCardBody>
              <PlayerCardName>{selectedPlayer.name}</PlayerCardName>
              <PlayerClubIcons>
                <ClubIcon><TeamShield size={20} color={GOLD} /></ClubIcon>
                <ClubIcon><TeamShield size={20} color={GOLD} /></ClubIcon>
              </PlayerClubIcons>
              <ActionButtons>
                <ActionBtn primary>BUY</ActionBtn>
                <ActionBtn>OFFER</ActionBtn>
              </ActionButtons>
            </PlayerCardBody>
          </PlayerCard>
        </PlayerDetail>
      </PlayerLayout>
    </ContentPanel>
  );
};

export default Market;
