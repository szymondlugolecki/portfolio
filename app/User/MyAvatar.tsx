import Image from "next/image";

export default function MyAvatar({ size }: { size: number }) {
  return (
    <Image
      src="https://pbs.twimg.com/profile_images/1553350667879825409/UzBL3m_u_400x400.jpg"
      alt="Author Avatar"
      width={size}
      height={size}
      className="duration-200 rounded-full cursor-pointer hover:opacity-90"
    />
  );
}
