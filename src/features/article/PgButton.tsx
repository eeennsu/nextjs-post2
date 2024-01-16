import type { FC } from 'react';

type Props = {
    num: number;
    isCurrent: boolean;
    onClick: () => void;
    isFetching: boolean;
}

const PgButton: FC<Props> = ({ num, isCurrent, onClick, isFetching }) => {

    return (
        <button className={`inline-flex items-center overflow-hidden transition justify-center rounded-lg drop-shadow-lg hover:drop-shadow-2xl text-white ${isCurrent ? 'bg-slate-800 w-10 h-12 text-lg' : 'bg-slate-500 w-8 h-10 '} ${isFetching && 'bg-opacity-70'}`} onClick={onClick} disabled={isFetching}>
            {num}
        </button>
    );
}

export default PgButton;