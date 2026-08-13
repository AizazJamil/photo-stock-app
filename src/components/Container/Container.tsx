interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="mx-auto max-w-[1920px] px-12">{children}</div>;
};

export default Container;
