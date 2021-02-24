import * as React from 'react';
import { motion, useCycle } from 'framer-motion';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 260px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    },
    zIndex: 1000
  }),
  closed: {
    clipPath: 'circle(30px at 260px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    },
    zIndex: 0
  }
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variantsmenu = {
  open: {
    y: 0,
    opacity: 1,
    display: 'flex',
    zIndex: 1000,
    pointerEvents: 'all',
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    zIndex: 1000,
    display: 'flex',
    pointerEvents: 'none',
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  }
};

const itemIds = [
  { text: 'Work', key: 0, color: `#FF008C` },
  { text: 'Services', key: 1, color: `#D309E1` },
  { text: 'About', key: 2, color: `#9C1AFF` },
  { text: 'Contact', key: 3, color: `#7700FF` },
  { text: 'Get A Quote', key: 4, color: `#4400FF` }
];

//const items = [0, 1, 2, 3, 4];
//const i = items.forEach((item) => console.log(item));
//const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export default function NavMenu({ i }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];
  console.log(i);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={'100vh'}
      className="NavMenu">
      <motion.div className="background" variants={sidebar} />
      <motion.ul variants={variants}>
        {itemIds.map((item) => (
          <motion.li
            key={item.key}
            i={item.key}
            color={item.color}
            style={{ color: `${item.color}` }}
            variants={variantsmenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            <div className="iconplaceholder" style={{ border: `2px solid ${item.color}` }}>
              <i id="icon" className="far fa-user-circle"></i>
            </div>
            <div className="textplaceholder" style={{ border: `2px solid ${item.color}` }}>
              {item.text}
            </div>
          </motion.li>
        ))}
      </motion.ul>
      <button onClick={toggleOpen}>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' }
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' }
            }}
          />
        </svg>
      </button>
    </motion.nav>
  );
}
