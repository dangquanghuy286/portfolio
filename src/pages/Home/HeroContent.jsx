import Button from "../../components/Button";

function HeroContent() {
  return (
    <div className="text-left md:max-w-72 lg:max-w-lg">
      <p className="text-xl font-medium text-blue-400">Đặng Hữu Quang Huy</p>
      <h2 className="mt-4 font-serif text-3xl font-bold tracking-widest dark:text-white/80 md:text-4xl lg:mt-8 lg:text-5xl">
        Software Engineer...!
      </h2>
      <p className="mt-4 dark:text-slate-50 md:text-lg">
        Đam mê xây dựng các giải pháp phần mềm mở rộng và hiệu quả.
      </p>
      <div className="flex items-center gap-5 mt-5">
        <Button className="contact-btn">Liên hệ với tôi</Button>
        <Button className="contact-btn" variant="outline">
          Sơ Yếu Lý Lịch
        </Button>
      </div>
    </div>
  );
}
export default HeroContent;
