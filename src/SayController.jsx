export default function SayController({ setMessage }) {
    const hi = () => {
        setMessage('안녕하세요.');
    };

    const bye = () => {
        setMessage('안녕히 가세요.');
    };

    return(
        <div>
            <button onClick={hi}>입장</button>
            <button onClick={bye}>퇴장</button>
        </div>
    );
}