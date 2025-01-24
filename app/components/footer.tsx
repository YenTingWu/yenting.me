const data = [
  {
    title: 'github',
    link: 'https://github.com/YenTingWu',
  },
  {
    title: 'resume',
    link: 'https://resume.yenting.me',
  },
  {
    title: 'email',
    link: 'mailTo:a9600125a@gmail.com',
  },
];

export const Footer = () => {
  return (
    <footer className="w-full mt-[.25rem]">
      {data.map(({ title, link }) => (
        <a
          key={title}
          href={link}
          target="_blank"
          className="
          hover:underline
          sm:[&:not(:first-child)]:ml-3 
          [&:not(:first-child)]:ml-2
          text-sm
          text-neutral-500
          "
        >
          {title}
        </a>
      ))}
    </footer>
  );
};
