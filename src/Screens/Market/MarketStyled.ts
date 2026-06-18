import styled from "styled-components";

export const ACCENT = "#2DC653";
export const GOLD = "#FFD700";
export const BG_DARK = "#1C1C1C";
export const BG_WINDOW = "#E8E8E8";
export const BG_LIST = "#B0B0B0";
export const DISABLED = "#666666";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${BG_DARK};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  font-family: "DinPRO", sans-serif;
`;

export const TopBar = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: #000;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 8px 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

export const BackArrow = styled.button`
  background: none;
  border: none;
  color: ${ACCENT};
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 16px;
  &:hover {
    opacity: 0.8;
  }
`;

export const TabItem = styled.span<{ active: boolean }>`
  font-family: "DinPROBold", sans-serif;
  font-size: 20px;
  color: ${({ active }) => (active ? ACCENT : "#666")};
  cursor: pointer;
  padding: 4px 20px;
  text-transform: uppercase;
  &:hover {
    color: ${({ active }) => (active ? ACCENT : "#999")};
  }
`;

export const TabSeparator = styled.span`
  color: #444;
  font-size: 20px;
  padding: 0 4px;
`;

export const ContentPanel = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: ${BG_WINDOW};
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(255, 255, 255, 0.3) 2px,
    rgba(255, 255, 255, 0.3) 4px
  );
  border-radius: 12px;
  padding: 24px;
  box-sizing: border-box;
`;

export const SearchFilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #d0d0d0;
  border-radius: 24px;
  padding: 6px 14px;
  input {
    width: 160px;
    border: none;
    outline: none;
    background: transparent;
    font-family: "DinPRO", sans-serif;
    font-size: 13px;
    color: #666;
    &::placeholder {
      color: #999;
    }
  }
  svg {
    color: #666;
    margin-right: 6px;
    flex-shrink: 0;
  }
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const FilterChip = styled.div<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? ACCENT : "#000")};
  color: ${({ active }) => (active ? "#000" : "#fff")};
  font-family: "DinPROBold", sans-serif;
  font-size: 11px;
  padding: 5px 16px;
  border-radius: 20px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
`;

export const TeamBox = styled.div`
  background-color: ${BG_LIST};
  border-radius: 10px;
  padding: 20px;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 14px;
`;

export const TeamCard = styled.div<{ hasBorder?: boolean }>`
  background-color: #000;
  border: ${({ hasBorder }) => (hasBorder ? `2px solid ${ACCENT}` : "2px solid transparent")};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px 6px 10px;
  aspect-ratio: 3 / 4;
`;

export const TeamIcon = styled.div`
  color: ${GOLD};
  font-size: 32px;
  line-height: 1;
  margin-bottom: 6px;
`;

export const TeamCardName = styled.div`
  color: #fff;
  font-family: "DinPROBold", sans-serif;
  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
  margin-top: auto;
  line-height: 1.2;
`;

export const TeamBar = styled.div`
  width: 70%;
  height: 3px;
  background-color: ${ACCENT};
  border-radius: 2px;
  margin: 4px 0;
`;

export const PlayerLayout = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 8px;
`;

export const PlayerList = styled.div`
  flex: 1;
  background-color: ${BG_LIST};
  border-radius: 8px;
  padding: 12px;
`;

export const PlayerListHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  font-family: "DinPROBold", sans-serif;
  font-size: 13px;
  color: #000;
  border-bottom: 1px solid #888;
  margin-bottom: 8px;
`;

export const PlayerListHeaderCell = styled.div<{ flex?: number }>`
  flex: ${({ flex }) => flex || 1};
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const PlayerRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  cursor: pointer;
  transition: background 0.15s;
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const PlayerCell = styled.div<{ flex?: number }>`
  flex: ${({ flex }) => flex || 1};
  font-family: "DinPRO", sans-serif;
  font-size: 13px;
  color: #000;
`;

export const PlayerDetail = styled.div`
  width: 340px;
  flex-shrink: 0;
`;

export const PlayerCard = styled.div`
  border: 2px solid ${ACCENT};
  border-radius: 12px;
  background-color: #111;
  overflow: hidden;
`;

export const PlayerPhoto = styled.div`
  width: 100%;
  height: 260px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
  }
`;

export const PlayerCardBody = styled.div`
  padding: 16px;
`;

export const PlayerCardName = styled.div`
  color: #fff;
  font-family: "DinPROBold", sans-serif;
  font-size: 18px;
  text-align: center;
  margin-bottom: 12px;
  text-transform: uppercase;
`;

export const PlayerClubIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const ClubIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #000;
  border: 1px solid ${ACCENT};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${GOLD};
  font-size: 18px;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

export const ActionBtn = styled.button<{ primary?: boolean }>`
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 6px;
  font-family: "DinPROBold", sans-serif;
  font-size: 12px;
  cursor: pointer;
  background-color: ${({ primary }) => (primary ? ACCENT : "#000")};
  color: ${({ primary }) => (primary ? "#000" : "#fff")};
  text-transform: uppercase;
`;

export const HeaderWithPopups = styled.div`
  position: relative;
`;

export const PopupBubble = styled.div<{ top?: string; right?: string; left?: string }>`
  position: absolute;
  top: ${({ top }) => top || "-30px"};
  right: ${({ right }) => right || "auto"};
  left: ${({ left }) => left || "auto"};
  width: 48px;
  height: 48px;
  background-color: #000;
  border: 2px solid ${ACCENT};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${GOLD};
  font-size: 20px;
  z-index: 10;
`;

export const PopupBubbleSmall = styled.div<{ top?: string; right?: string; left?: string }>`
  position: absolute;
  top: ${({ top }) => top || "-20px"};
  right: ${({ right }) => right || "auto"};
  left: ${({ left }) => left || "auto"};
  width: 36px;
  height: 36px;
  background-color: #000;
  border: 2px solid ${ACCENT};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${GOLD};
  font-size: 16px;
  z-index: 10;
`;

export const LockScreen = styled.div`
  min-height: 100vh;
  background-color: ${BG_DARK};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "DinPRO", sans-serif;
  padding: 40px;
  box-sizing: border-box;
`;

export const LockTitle = styled.p`
  font-family: "DinPROBold", sans-serif;
  font-size: 7.5vh;
  color: ${ACCENT};
  margin: 0 0 12px;
`;

export const LockSubtitle = styled.p`
  font-family: "DinPROBold", sans-serif;
  font-size: 11vh;
  color: #fff;
  margin: 0 0 8px;
  line-height: 11vh;
  text-align: center;
`;

export const LockDescription = styled.p`
  font-family: "DinPRONormale", sans-serif;
  font-size: 4vh;
  color: #fff;
  margin: 16px 0;
  text-align: center;
`;

export const LockInputRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 20px;
  align-items: center;
`;

export const LockInput = styled.input`
  text-align: center;
  width: 200px;
  height: 40px;
  background-color: #fff;
  border: none;
  font-family: "DinPRO", sans-serif;
  font-size: 16px;
  color: #000;
`;

export const LockButton = styled.button`
  background-color: ${ACCENT};
  width: 100px;
  height: 40px;
  color: #fff;
  font-size: 20px;
  font-family: "DinPROBold", sans-serif;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export const LockError = styled.p`
  color: #ff4444;
  font-family: "DinPRO", sans-serif;
  margin: 8px 0 0;
`;
