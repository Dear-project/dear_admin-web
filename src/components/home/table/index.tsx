import { CSSObject } from "styled-components";
import * as S from "./style";

interface Props {
  constant: string[];
  style?: CSSObject;
}

const Table = ({ constant, style }: Props) => {
  return (
    <S.memberThead>
      <S.memberTableTr customStyle={style}>
        {constant?.map((item, idx) => (
          <S.TH key={idx}>{item}</S.TH>
        ))}
      </S.memberTableTr>
    </S.memberThead>
  );
};

export default Table;
