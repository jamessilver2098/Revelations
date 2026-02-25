export interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: 'Self Awareness & Spiritual Empowerment' | 'Meditative Poetry' | 'Redemptive Apocalypse' | 'Children Stories';
  imageUrl: string;
  author: string;
  date: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'The Stillness Within the Storm',
    excerpt: 'Discovering the unshakable peace that resides in your core, even amidst life’s greatest challenges. A journey back to the eye of the hurricane.',
    category: 'Self Awareness & Spiritual Empowerment',
    imageUrl: 'https://picsum.photos/seed/celestial1/800/600',
    author: 'A. Seeker',
    date: 'July 16, 2026',
    content: `
### The Eye of the Storm

Life often feels like a tempest, a whirlwind of thoughts, emotions, and external events. We are taught to fight the storm, to resist the winds, and to build walls against the crashing waves. But what if the secret to peace isn't in resistance, but in surrender? What if, at the very center of the hurricane, there is a place of profound stillness?

> “Within you, there is a stillness and a sanctuary to which you can retreat at any time and be yourself.” - Hermann Hesse

This inner sanctuary is not something you need to build; it is your native state. It is the silent awareness that witnesses the storm without being swept away by it. To find it, you need only shift your attention from the chaos of the periphery to the quiet of the core.

**Practices for Finding Stillness:**

*   **Mindful Breathing:** Anchor your awareness in the simple, rhythmic sensation of your breath.
*   **Body Scan:** Gently bring your attention to each part of your body, noticing any sensations without judgment.
*   **Observing Thoughts:** Watch your thoughts arise and pass like clouds in the sky, without clinging to them or pushing them away.

By returning to this inner stillness, you discover a strength that is not brittle, but resilient. You learn to dance with the storm, guided by the unwavering peace of your own center.
`,
  },
  {
    id: 2,
    title: 'Whispers of the Infinite',
    excerpt: 'A collection of meditative verses designed to quiet the mind and open the heart to the subtle symphony of the cosmos.',
    category: 'Meditative Poetry',
    imageUrl: 'https://picsum.photos/seed/celestial2/800/600',
    author: 'R. Mystic',
    date: 'July 12, 2026',
    content: `
A single breath,
 a silent star,
 reveals the truth
 of what you are.

 Not the name,
 not the face,
 but the boundless, empty
, sacred space.

 Let the world spin,
 let the stories fade,
 in the quiet heart,
 a universe is made.
`,
  },
  {
    id: 3,
    title: 'The Apocalypse of the Self',
    excerpt: 'Redefining apocalypse not as an end, but as a profound revelation—the lifting of the veil to reveal your true, divine nature.',
    category: 'Redemptive Apocalypse',
    imageUrl: 'https://picsum.photos/seed/celestial3/800/600',
    author: 'The Scribe',
    date: 'July 8, 2026',
    content: `
The word 'apocalypse' comes from the Greek *apokálypsis*, meaning 'an unveiling' or 'a revelation.' It is not about a world ending in fire, but about a world being *revealed* for what it truly is.

The true apocalypse is an internal one. It is the moment the illusion of the separate self shatters. It is the tearing down of the veils of conditioning, fear, and belief that have obscured the radiant light of your true nature.

This is not an event to be feared, but one to be welcomed. It is the end of a dream and the awakening to reality. It is the final, redemptive act of remembering who you have always been, beneath the layers of who you thought you were.
`,
  },
  {
    id: 4,
    title: 'The Little Star Who Forgot How to Shine',
    excerpt: 'A gentle tale for all ages about a star who journeys through the cosmos to rediscover its own inner light, with the help of a wise old comet.',
    category: 'Children Stories',
    imageUrl: 'https://picsum.photos/seed/celestial4/800/600',
    author: 'The Storyteller',
    date: 'July 5, 2026',
    content: `
Once, in a corner of the sky so vast it made you feel dizzy, there was a little star named Flicker. Flicker was supposed to be a very bright star, but he had forgotten how to shine.

He saw all the other stars twinkling and dancing, and he felt very small and dim. “I’ve lost my light,” he whispered to the darkness.

A wise old comet with a long, silvery tail heard him. “Oh, no, little one,” the comet hummed, his voice like ancient music. “A star can never lose its light. It can only forget it is there.”

The comet took Flicker on a journey past swirling nebulae and sleeping planets. He showed him how even the darkest space is filled with potential, and how the biggest stars are made of the same dust as the smallest ones.

Flicker learned that shining wasn’t about trying to be bright, but about being himself. He took a deep, cosmic breath, and instead of trying to push his light out, he just… let it be. And in that moment, a warm, gentle glow began to pulse from his heart, growing brighter and brighter until he was the most beautiful star in his corner of the sky.
`,
  },
  {
    id: 5,
    title: 'An Ode to the Quiet Mind',
    excerpt: 'Exploring the profound beauty and clarity that arises when the incessant chatter of the mind gives way to the vastness of pure awareness.',
    category: 'Meditative Poetry',
    imageUrl: 'https://picsum.photos/seed/celestial5/800/600',
    author: 'R. Mystic',
    date: 'July 1, 2026',
    content: `
There is a cathedral within you,
 vast and silent.
 Its windows are made of awareness,
 its pillars of peace.

 The endless noise of the world
 cannot penetrate its walls.
 The frantic rush of time
 slows to a reverent pace.

 Enter this space often.
 It asks for nothing
 but your presence.
 It offers nothing
 but yourself.
`,
  },
  {
    id: 6,
    title: 'The Alchemy of Self-Love',
    excerpt: 'True empowerment begins with the radical act of accepting and loving oneself. A practical guide to transmuting self-judgment into self-compassion.',
    category: 'Self Awareness & Spiritual Empowerment',
    imageUrl: 'https://picsum.photos/seed/celestial6/800/600',
    author: 'A. Seeker',
    date: 'June 28, 2026',
    content: `
Self-love is not a destination, but a practice. It is the gentle, moment-by-moment act of turning towards yourself with the same kindness and compassion you would offer to a beloved friend.

It is not about arrogance or vanity. It is about acknowledging your inherent worthiness, exactly as you are, with all your perceived flaws and imperfections. It is the understanding that you are a unique expression of the universe, and therefore, undeniably deserving of love.

**The Alchemical Process:**

1.  **Awareness:** Notice the voice of the inner critic without judgment. Simply see it for what it is: a conditioned pattern of thought.
2.  **Acceptance:** Do not fight the critic. Acknowledge its presence with a gentle “I see you.”
3.  **Compassion:** Offer yourself a word of kindness. Place a hand on your heart and say, “It’s okay. I am here for you.”

This is the alchemy. You are not destroying the lead of self-judgment, but transmuting it into the gold of self-compassion. With each act of kindness, you are returning home to the truth of your own magnificent heart.
`,
  },
];
