interface ScreenBackgroundProps {
  children?: React.ReactNode;
}

const ScreenBackground: React.FC<ScreenBackgroundProps> = ({ children }) => {
  return (
    <div
      className="fixed inset-0 z-[-1] 
          bg-gradient-to-br from-blue-200 via-teal-100 to-green-200
          dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {children}
    </div>
  );
};
export default ScreenBackground;
