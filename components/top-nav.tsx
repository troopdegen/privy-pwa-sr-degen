import { useLogout, usePrivy } from '@privy-io/react-auth'
import Link from 'next/link'

const TopNav = () => {
	const { ready, authenticated } = usePrivy()
	const { logout } = useLogout()

	return (
		<div className='fixed top-0 left-0 z-20 w-full bg-zinc-900 pt-safe'>
			<header className='border-b bg-zinc-100 px-safe dark:border-zinc-800 dark:bg-zinc-900'>
				<div className='mx-auto flex h-20 max-w-screen-md items-center justify-between px-4 md:px-6'>
					<h1 className='font-medium text-lg md:text-xl'>🎩Sr. Degen</h1>

					<nav className='flex items-center space-x-6'>
						<div className='flex items-center space-x-6'>
							{ready && authenticated && (
								<>
									<Link
										href='/dashboard'
										className='cursor-pointer text-sm text-gray-600'
									>
										home
									</Link>
									<Link
										href='/embedded-wallet'
										className='cursor-pointer text-sm text-gray-600'
									>
										play
									</Link>
									<Link
										href='/load-assets'
										className='cursor-pointer text-sm text-gray-600'
									>
										load
									</Link>
									<button
										className='bg-indigo-600 hover:bg-indigo-700 text-white text-base py-1.5 px-3 rounded-lg'
										onClick={logout}
									>
										logout
									</button>
								</>
							)}
						</div>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default TopNav
