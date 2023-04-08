import { memo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type Props = {
  value?: string;
  onChange?: (e: string) => void;
};

function Editor({ value, onChange }: Props) {
  const modules = {
    toolbar: [
      [{ header: 1 }, { header: 2 }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
      // 'image'
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'link',
    // 'image',
  ];
  return (
    <ReactQuill
      style={{ height: '600px' }}
      theme="snow"
      modules={modules}
      formats={formats}
      placeholder="프로젝트에 대해 소개해주세요!"
      onChange={onChange}
      value={value}
    />
  );
}

export default memo(Editor);
