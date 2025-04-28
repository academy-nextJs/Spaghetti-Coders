import { SectionTop } from '../common/sectionTop';

export default function DreamSectionTop() {
  return (
    <SectionTop
      mainText={['اجاره ویلا در\nمحبوب‌ترین مقاصد این ماه']} // Still supports string with \n
      subText={[
        'در اینجا می توانید محبوب ترین مقصد هارا از بین انتخاب\n کاربران مشاهده کنید و آن ها بررسی کنید !',
      ]}
      chipText="مقصد رویا ها"
    />
  );
}
