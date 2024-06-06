import * as S from "../style";

interface Props {
    constant: string[];
}

const Table = ({ constant }: Props) => {
    return (
        <>
            <S.memberThead>
                <S.memberTableTr>
                    {constant.map((item, idx) => (
                        <S.TH key={idx}>
                            {item}
                        </S.TH>
                    ))}
                </S.memberTableTr>
            </S.memberThead>
        </>
    );
}

export default Table;
