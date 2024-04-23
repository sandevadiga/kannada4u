import Link from 'next/link';

const SecondNavBar = () => {

  return (
    <nav className={`flex justify-between items-center p-4 dark:bg-gray-800 dark:text-white`}>
      <div className="flex items-center space-x-4">
        <Link href="/Top10">
          Top10
        </Link>
        <Link href="/Events">
          EVENTS / Functions
        </Link>
        <Link href="/LiveMatch">
            Live Match
        </Link>
        <Link href="/LocalJobs">
          LocalJobs
        </Link>
      </div>
    </nav>
  );
};

export default SecondNavBar;
