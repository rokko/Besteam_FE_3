import React, { useState } from "react";
import {
  PageWrapper,
  ScreenTitle,
  TabBar,
  TabButton,
  ContentPanel,
  SearchBar,
  FilterRow,
  FilterChip,
  TeamGrid,
  TeamCard,
  TeamIcon,
  TeamBar,
  TeamLabel,
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
  HeaderWithPopups,
  PopupBubble,
  PopupBubbleSmall,
  ACCENT,
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

const teamLogos = Array.from({ length: 12 }, (_, i) => i);

const TeamShield: React.FC<{ size?: number }> = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
    <path d="M18 2L4 10v8c0 8.5 5.5 16 14 18 8.5-2 14-9.5 14-18v-8L18 2z" fill={ACCENT} opacity="0.2" />
    <path d="M18 4L6 11v7c0 7.5 5 14 12 16 7-2 12-8.5 12-16v-7L18 4z" stroke={ACCENT} strokeWidth="1.5" fill="none" />
    <text x="18" y="21" textAnchor="middle" fill={ACCENT} fontSize="10" fontWeight="bold">T</text>
  </svg>
);

const ListSvg = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14">
    <rect x="1" y="2" width="14" height="2" rx="1" />
    <rect x="1" y="7" width="14" height="2" rx="1" />
    <rect x="1" y="12" width="14" height="2" rx="1" />
  </svg>
);

const SearchSvg = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M10.5 10.5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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

const Market: React.FC = () => {
  const [accesso, setAccesso] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState<"Team" | "Player">("Team");

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
      <ScreenTitle>Market</ScreenTitle>
      <TabBar>
        <TabButton active={activeTab === "Team"} onClick={() => setActiveTab("Team")}>
          Market_Team
        </TabButton>
        <TabButton active={activeTab === "Player"} onClick={() => setActiveTab("Player")}>
          Market_Player
        </TabButton>
      </TabBar>

      {activeTab === "Team" ? <MarketTeam /> : <MarketPlayer />}
    </PageWrapper>
  );
};

const MarketTeam: React.FC = () => {
  return (
    <ContentPanel>
      <HeaderWithPopups>
        <SearchBar>
          <SearchSvg />
          <input type="text" placeholder="Search teams..." />
        </SearchBar>
        <PopupBubbleSmall top="-18px" left="16px">
          <TeamShield size={18} />
        </PopupBubbleSmall>
        <PopupBubble top="-24px" right="16px">
          <TeamShield size={22} />
        </PopupBubble>
      </HeaderWithPopups>

      <FilterRow>
        <FilterChip active>TEAMS</FilterChip>
        <FilterChip>ALL</FilterChip>
        <FilterChip>RARE</FilterChip>
        <FilterChip>EPIC</FilterChip>
        <FilterChip>LEGENDARY</FilterChip>
      </FilterRow>

      <TeamGrid>
        {teamLogos.map((_, i) => {
          const isTopRow = i < 6;
          const hasBorder = i < 2;
          return (
            <TeamCard key={i} hasBorder={hasBorder}>
              {isTopRow ? (
                <>
                  <TeamIcon><TeamShield /></TeamIcon>
                  <TeamBar />
                </>
              ) : (
                <>
                  <TeamLabel>TEAM {i - 5}</TeamLabel>
                  <TeamIcon><TeamShield /></TeamIcon>
                </>
              )}
            </TeamCard>
          );
        })}
      </TeamGrid>
    </ContentPanel>
  );
};

const MarketPlayer: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(dummyPlayers[0]);

  return (
    <ContentPanel>
      <HeaderWithPopups>
        <SearchBar>
          <SearchSvg />
          <input type="text" placeholder="Search players..." />
        </SearchBar>
        <PopupBubbleSmall top="-18px" left="120px">
          <TeamShield size={18} />
        </PopupBubbleSmall>
      </HeaderWithPopups>

      <FilterRow>
        <FilterChip>TEAMS</FilterChip>
        <FilterChip active>PLAYER</FilterChip>
        <FilterChip>RARE</FilterChip>
        <FilterChip>EPIC</FilterChip>
        <FilterChip>LEGENDARY</FilterChip>
      </FilterRow>

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
                <ClubIcon><TeamShield size={20} /></ClubIcon>
                <ClubIcon><TeamShield size={20} /></ClubIcon>
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
