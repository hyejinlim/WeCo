import { memo, useState } from 'react';
import StarRatings from 'react-star-ratings';

type Props = {
  onCancel: () => void;
};

function Rating({ onCancel }: Props) {
  const [feedback, setFeedback] = useState<string>('');
  const [star, setStar] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFeedback(value);
  };
  const handleCancel = () => {
    onCancel && onCancel();
  };
  const handleChangeRating = (num: number) => {
    setStar(num);
  };
  const onSubmit = () => {
    console.log('star', star, 'feedback', feedback);
    handleCancel();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center my-1">
      <StarRatings rating={star} changeRating={handleChangeRating} />
      <div className="flex items-center">
        <input
          onChange={handleChange}
          type="text"
          placeholder="피드백을 남겨주세요"
          className="w-80 h-10 text-base py-0 px-2 border-solid mr-2 border-slate-500 border-2 rounded-lg my-4"
        />
        <button
          className="bg-black rounded-lg border-none w-24 h-10 text-base flex items-center justify-center text-white"
          type="submit"
        >
          제출하기
        </button>
      </div>
    </form>
  );
}

export default memo(Rating);
