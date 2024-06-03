import Image from "next/image";

export default function Avatar({ size }: { size: number }) {
  return (
    <Image
      src="/avatar.gif"
      alt="Author Avatar"
      width={size}
      height={size}
      className="object-cover w-10 h-10 duration-200 rounded-full cursor-pointer hover:opacity-90"
    />
  );
}
