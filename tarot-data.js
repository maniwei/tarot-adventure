/* ==================== Tarot Data ==================== */

const tarotCards = [
  // Major Arcana
  {
    id: 0,
    name: "The Fool",
    category: "major",
    keywords: "New beginnings, adventure, freedom, unlimited potential",
    imageUrl: "https://ext.same-assets.com/2618794310/340646065.jpeg",
    upright: "New beginnings, innocence, spontaneity, a free spirit",
    reversed: "Recklessness, carelessness, risk, foolishness",
    eastern: "In Eastern wisdom, The Fool resonates with Taoist 'wu wei' philosophy, reminding us to follow nature and not force things."
  },
  {
    id: 1,
    name: "The Magician",
    category: "major",
    keywords: "Creativity, skill, willpower, manifestation",
    imageUrl: "https://ext.same-assets.com/2618794310/2455888245.jpeg",
    upright: "Manifestation, resourcefulness, power, inspired action",
    reversed: "Manipulation, poor planning, untapped talents",
    eastern: "The Magician embodies the Buddhist concept of skillful means, using wisdom to transform circumstances."
  },
  {
    id: 2,
    name: "The High Priestess",
    category: "major",
    keywords: "Intuition, unconscious, inner voice, insight",
    imageUrl: "https://ext.same-assets.com/2618794310/1949324866.jpeg",
    upright: "Intuition, sacred knowledge, divine feminine, the subconscious mind",
    reversed: "Secrets, disconnected from intuition, withdrawal",
    eastern: "She represents the Yin principle in Eastern philosophy, the receptive and intuitive aspect of consciousness."
  },
  {
    id: 3,
    name: "The Empress",
    category: "major",
    keywords: "Abundance, nurturing, sensuality, beauty",
    imageUrl: "https://ext.same-assets.com/2618794310/4291578481.jpeg",
    upright: "Femininity, beauty, nature, nurturing, abundance",
    reversed: "Creative block, dependence on others, emptiness",
    eastern: "The Empress embodies the Earth element, representing groundedness and natural abundance."
  },
  {
    id: 4,
    name: "The Emperor",
    category: "major",
    keywords: "Authority, structure, control, leadership",
    imageUrl: "https://ext.same-assets.com/2618794310/1558489674.jpeg",
    upright: "Authority, establishment, structure, a father figure",
    reversed: "Domination, excessive control, lack of discipline",
    eastern: "The Emperor represents Yang energy, the active principle of creation and order."
  },
  {
    id: 5,
    name: "The Hierophant",
    category: "major",
    keywords: "Tradition, belief, morality, spiritual guidance",
    imageUrl: "https://ext.same-assets.com/2618794310/2937236736.jpeg",
    upright: "Spiritual wisdom, religious beliefs, conformity, tradition",
    reversed: "Personal beliefs, freedom, challenging the status quo",
    eastern: "The Hierophant represents the teacher-student relationship central to Eastern spiritual traditions."
  },
  {
    id: 6,
    name: "The Lovers",
    category: "major",
    keywords: "Love, harmony, relationships, values",
    imageUrl: "https://ext.same-assets.com/2618794310/1048305483.jpeg",
    upright: "Love, harmony, relationships, values alignment",
    reversed: "Self-love, disharmony, imbalance, misalignment of values",
    eastern: "The Lovers card reflects the Taoist concept of complementary opposites finding harmony."
  },
  {
    id: 7,
    name: "The Chariot",
    category: "major",
    keywords: "Control, willpower, victory, self-discipline",
    imageUrl: "https://ext.same-assets.com/2618794310/873220406.jpeg",
    upright: "Control, willpower, success, action, determination",
    reversed: "Self-discipline, opposition, lack of direction",
    eastern: "The Chariot embodies the Buddhist concept of right effort, moving forward with balanced determination."
  },
  {
    id: 8,
    name: "Strength",
    category: "major",
    keywords: "Courage, strength, patience, control",
    imageUrl: "https://ext.same-assets.com/2618794310/2577814387.jpeg",
    upright: "Courage, persuasion, influence, compassion",
    reversed: "Inner strength, self-doubt, low energy",
    eastern: "Strength represents the gentle power of compassion, central to Buddhist teachings."
  },
  {
    id: 9,
    name: "The Hermit",
    category: "major",
    keywords: "Introspection, solitude, guidance, wisdom",
    imageUrl: "https://ext.same-assets.com/2618794310/2016577690.jpeg",
    upright: "Soul-searching, introspection, being alone, inner guidance",
    reversed: "Isolation, loneliness, withdrawal",
    eastern: "The Hermit embodies the meditative traditions of Eastern philosophy, seeking wisdom within."
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    category: "major",
    keywords: "Destiny, turning point, opportunity, change",
    imageUrl: "https://ext.same-assets.com/2618794310/2861723955.jpeg",
    upright: "Good luck, karma, life cycles, destiny, a turning point",
    reversed: "Bad luck, resistance to change, breaking cycles",
    eastern: "The Wheel reflects the Buddhist concept of karma and the ever-turning cycle of existence."
  },
  {
    id: 11,
    name: "Justice",
    category: "major",
    keywords: "Justice, fairness, truth, cause and effect",
    imageUrl: "https://ext.same-assets.com/2618794310/1456454155.jpeg",
    upright: "Justice, fairness, truth, cause and effect, law",
    reversed: "Unfairness, lack of accountability, dishonesty",
    eastern: "Justice represents the Eastern concept of dharma, living in alignment with cosmic law."
  },
  {
    id: 12,
    name: "The Hanged Man",
    category: "major",
    keywords: "Sacrifice, pause, new perspective, surrender",
    imageUrl: "https://ext.same-assets.com/2618794310/1987963969.jpeg",
    upright: "Pause, surrender, letting go, new perspectives",
    reversed: "Delays, resistance, stalling, indecision",
    eastern: "The Hanged Man embodies the Zen concept of letting go and seeing things from a new perspective."
  },
  {
    id: 13,
    name: "Death",
    category: "major",
    keywords: "Ending, change, transformation, transition",
    imageUrl: "https://ext.same-assets.com/2618794310/2696485906.jpeg",
    upright: "Endings, change, transformation, transition",
    reversed: "Resistance to change, personal transformation",
    eastern: "Death represents the Buddhist teaching of impermanence, reminding us that all things must pass."
  },
  {
    id: 14,
    name: "Temperance",
    category: "major",
    keywords: "Balance, moderation, patience, purpose",
    imageUrl: "https://ext.same-assets.com/2618794310/2225087064.jpeg",
    upright: "Balance, moderation, patience, purpose",
    reversed: "Imbalance, excess, self-healing, re-alignment",
    eastern: "Temperance embodies the Middle Way of Buddhism, finding balance in all things."
  },
  {
    id: 15,
    name: "The Devil",
    category: "major",
    keywords: "Bondage, materialism, desire, addiction",
    imageUrl: "https://ext.same-assets.com/2618794310/378074380.jpeg",
    upright: "Shadow self, attachment, addiction, restriction",
    reversed: "Releasing limiting beliefs, exploring dark thoughts",
    eastern: "The Devil represents attachment, which Buddhism identifies as the root of suffering."
  },
  {
    id: 16,
    name: "The Tower",
    category: "major",
    keywords: "Sudden change, chaos, revelation, awakening",
    imageUrl: "https://ext.same-assets.com/2618794310/1259069008.jpeg",
    upright: "Sudden change, upheaval, chaos, revelation, awakening",
    reversed: "Personal transformation, fear of change, averting disaster",
    eastern: "The Tower represents the shattering of illusions, a necessary step in spiritual awakening."
  },
  {
    id: 17,
    name: "The Star",
    category: "major",
    keywords: "Hope, faith, purpose, renewal",
    imageUrl: "https://ext.same-assets.com/2618794310/4105717106.jpeg",
    upright: "Hope, faith, purpose, renewal, spirituality",
    reversed: "Lack of faith, despair, self-trust, disconnection",
    eastern: "The Star represents the inner light that guides us, like the Buddha nature within."
  },
  {
    id: 18,
    name: "The Moon",
    category: "major",
    keywords: "Illusion, fear, anxiety, subconscious",
    imageUrl: "https://ext.same-assets.com/2618794310/653205454.jpeg",
    upright: "Illusion, fear, anxiety, subconscious, intuition",
    reversed: "Release of fear, repressed emotion, inner confusion",
    eastern: "The Moon reflects the Zen teaching that appearances can be deceiving."
  },
  {
    id: 19,
    name: "The Sun",
    category: "major",
    keywords: "Positivity, joy, success, vitality",
    imageUrl: "https://ext.same-assets.com/2618794310/2779272649.jpeg",
    upright: "Positivity, fun, warmth, success, vitality",
    reversed: "Inner child, feeling down, overly optimistic",
    eastern: "The Sun represents enlightenment, the awakening to our true radiant nature."
  },
  {
    id: 20,
    name: "Judgement",
    category: "major",
    keywords: "Reflection, reckoning, awakening, rebirth",
    imageUrl: "https://ext.same-assets.com/2618794310/2898632203.jpeg",
    upright: "Judgement, rebirth, inner calling, absolution",
    reversed: "Self-doubt, inner critic, ignoring the call",
    eastern: "Judgement represents the moment of spiritual awakening and self-realization."
  },
  {
    id: 21,
    name: "The World",
    category: "major",
    keywords: "Completion, achievement, travel, harmony",
    imageUrl: "https://ext.same-assets.com/2618794310/3885265685.jpeg",
    upright: "Completion, integration, accomplishment, travel",
    reversed: "Seeking personal closure, short-cuts, delays",
    eastern: "The World represents the completion of the spiritual journey, enlightenment achieved."
  },
  // Wands
  {
    id: 22,
    name: "Ace of Wands",
    category: "wands",
    keywords: "Creativity, inspiration, potential, new adventure",
    imageUrl: "https://ext.same-assets.com/2618794310/4287011896.jpeg",
    upright: "Inspiration, new opportunities, growth, potential",
    reversed: "Delays, lack of motivation, creativity blocks",
    eastern: "The Ace of Wands represents the spark of divine fire, the beginning of creative manifestation."
  },
  {
    id: 23,
    name: "Two of Wands",
    category: "wands",
    keywords: "Planning, decision, adventure, foresight",
    imageUrl: "https://ext.same-assets.com/2618794310/3677842621.jpeg",
    upright: "Future planning, progress, decisions, discovery",
    reversed: "Personal goals, inner alignment, fear of unknown",
    eastern: "Looking forward with clear vision, planning the path ahead."
  },
  {
    id: 24,
    name: "Three of Wands",
    category: "wands",
    keywords: "Foresight, expansion, progress, cooperation",
    imageUrl: "https://ext.same-assets.com/2618794310/1234357303.jpeg",
    upright: "Progress, expansion, foresight, overseas opportunities",
    reversed: "Playing small, lack of foresight, unexpected delays",
    eastern: "Watching your efforts begin to bear fruit with patience."
  },
  {
    id: 25,
    name: "Four of Wands",
    category: "wands",
    keywords: "Stability, celebration, harmony, achievement",
    imageUrl: "https://ext.same-assets.com/2618794310/667498838.jpeg",
    upright: "Celebration, joy, harmony, relaxation, homecoming",
    reversed: "Personal celebration, inner harmony, conflict",
    eastern: "A moment of harmony and celebration in your journey."
  },
  {
    id: 26,
    name: "Five of Wands",
    category: "wands",
    keywords: "Conflict, competition, challenge, opposition",
    imageUrl: "https://ext.same-assets.com/2618794310/2819544089.jpeg",
    upright: "Conflict, disagreements, competition, tension",
    reversed: "Inner conflict, conflict avoidance, tension release",
    eastern: "Through conflict comes growth and understanding."
  },
  {
    id: 27,
    name: "Six of Wands",
    category: "wands",
    keywords: "Victory, success, recognition, confidence",
    imageUrl: "https://ext.same-assets.com/2618794310/1554531710.jpeg",
    upright: "Success, public recognition, progress, self-confidence",
    reversed: "Private achievement, personal definition of success",
    eastern: "Recognition and success come through righteous action."
  },
  {
    id: 28,
    name: "Seven of Wands",
    category: "wands",
    keywords: "Defense, persistence, courage, challenge",
    imageUrl: "https://ext.same-assets.com/2618794310/3124045011.jpeg",
    upright: "Challenge, competition, protection, perseverance",
    reversed: "Exhaustion, giving up, overwhelmed",
    eastern: "Stand firm in your convictions, defend what you believe."
  },
  {
    id: 29,
    name: "Eight of Wands",
    category: "wands",
    keywords: "Action, speed, progress, messages",
    imageUrl: "https://ext.same-assets.com/2618794310/299363652.jpeg",
    upright: "Movement, fast paced change, action, alignment",
    reversed: "Delays, frustration, resisting change",
    eastern: "Swift movement forward, like an arrow flying true."
  },
  {
    id: 30,
    name: "Nine of Wands",
    category: "wands",
    keywords: "Resilience, vigilance, preparation, experience",
    imageUrl: "https://ext.same-assets.com/2618794310/2565497471.jpeg",
    upright: "Resilience, courage, persistence, test of faith",
    reversed: "Inner resources, struggle, overwhelm",
    eastern: "Perseverance through challenges builds inner strength."
  },
  {
    id: 31,
    name: "Ten of Wands",
    category: "wands",
    keywords: "Burden, responsibility, pressure, achievement",
    imageUrl: "https://ext.same-assets.com/2618794310/4101056322.jpeg",
    upright: "Burden, extra responsibility, hard work, completion",
    reversed: "Doing it all, delegation, release of burdens",
    eastern: "Carrying too much can slow your journey."
  },
  {
    id: 32,
    name: "Page of Wands",
    category: "wands",
    keywords: "Enthusiasm, curiosity, exploration, new ideas",
    imageUrl: "https://ext.same-assets.com/2618794310/4228706045.jpeg",
    upright: "Inspiration, ideas, discovery, limitless potential",
    reversed: "Newly-formed ideas, redirecting energy",
    eastern: "The beginner's mind is full of possibilities."
  },
  {
    id: 33,
    name: "Knight of Wands",
    category: "wands",
    keywords: "Action, adventure, enthusiasm, impulsiveness",
    imageUrl: "https://ext.same-assets.com/2618794310/2809129355.jpeg",
    upright: "Energy, passion, adventure, impulsiveness",
    reversed: "Passion project, haste, scattered energy",
    eastern: "Bold action driven by passionate purpose."
  },
  {
    id: 34,
    name: "Queen of Wands",
    category: "wands",
    keywords: "Confidence, enthusiasm, creativity, leadership",
    imageUrl: "https://ext.same-assets.com/2618794310/4014954643.jpeg",
    upright: "Courage, confidence, independence, social butterfly",
    reversed: "Self-respect, self-confidence, introverted",
    eastern: "Radiant confidence that inspires others."
  },
  {
    id: 35,
    name: "King of Wands",
    category: "wands",
    keywords: "Leadership, authority, creativity, vision",
    imageUrl: "https://ext.same-assets.com/2618794310/4135617433.jpeg",
    upright: "Natural-born leader, vision, entrepreneur, honor",
    reversed: "Impulsiveness, haste, ruthless, high expectations",
    eastern: "Wise leadership through vision and inspiration."
  },
  // Cups
  {
    id: 36,
    name: "Ace of Cups",
    category: "cups",
    keywords: "New emotions, intuition, creativity, emotional beginning",
    imageUrl: "https://ext.same-assets.com/2618794310/1809724827.jpeg",
    upright: "Love, new relationships, compassion, creativity",
    reversed: "Self-love, intuition, repressed emotions",
    eastern: "The overflowing cup of divine love and compassion."
  },
  {
    id: 37,
    name: "Two of Cups",
    category: "cups",
    keywords: "Cooperation, relationships, harmony, love",
    imageUrl: "https://ext.same-assets.com/2618794310/3682421993.jpeg",
    upright: "Unified love, partnership, mutual attraction",
    reversed: "Self-love, break-up, disharmony",
    eastern: "Two hearts finding harmony and balance."
  },
  {
    id: 38,
    name: "Three of Cups",
    category: "cups",
    keywords: "Celebration, friendship, joy, teamwork",
    imageUrl: "https://ext.same-assets.com/2618794310/28380381.jpeg",
    upright: "Celebration, friendship, creativity, collaborations",
    reversed: "Independence, alone time, hardcore partying",
    eastern: "Joy shared with others multiplies."
  },
  {
    id: 39,
    name: "Four of Cups",
    category: "cups",
    keywords: "Meditation, reflection, dissatisfaction, choice",
    imageUrl: "https://ext.same-assets.com/2618794310/1622517941.jpeg",
    upright: "Meditation, contemplation, apathy, reevaluation",
    reversed: "Retreat, withdrawal, checking in for alignment",
    eastern: "Sometimes we must look within to find what we seek."
  },
  {
    id: 40,
    name: "Five of Cups",
    category: "cups",
    keywords: "Loss, sadness, disappointment, focusing on negatives",
    imageUrl: "https://ext.same-assets.com/2618794310/1347689471.jpeg",
    upright: "Regret, failure, disappointment, pessimism",
    reversed: "Personal setbacks, self-forgiveness, moving on",
    eastern: "In loss, we find the opportunity for growth."
  },
  {
    id: 41,
    name: "Six of Cups",
    category: "cups",
    keywords: "Nostalgia, memories, kindness, gifts",
    imageUrl: "https://ext.same-assets.com/2618794310/1661269065.jpeg",
    upright: "Revisiting the past, childhood memories, innocence",
    reversed: "Living in the past, forgiveness, lacking playfulness",
    eastern: "Sweet memories of simpler times bring comfort."
  },
  {
    id: 42,
    name: "Seven of Cups",
    category: "cups",
    keywords: "Choice, fantasy, desire, possibilities",
    imageUrl: "https://ext.same-assets.com/2618794310/2247698442.jpeg",
    upright: "Opportunities, choices, wishful thinking, illusion",
    reversed: "Alignment, personal values, overwhelmed by choices",
    eastern: "Discernment is needed when faced with many paths."
  },
  {
    id: 43,
    name: "Eight of Cups",
    category: "cups",
    keywords: "Abandonment, seeking, growth, new direction",
    imageUrl: "https://ext.same-assets.com/2618794310/3352553263.jpeg",
    upright: "Disappointment, abandonment, withdrawal, escapism",
    reversed: "Trying one more time, indecision, aimless drifting",
    eastern: "Sometimes we must leave behind what no longer serves us."
  },
  {
    id: 44,
    name: "Nine of Cups",
    category: "cups",
    keywords: "Satisfaction, happiness, achievement, emotional richness",
    imageUrl: "https://ext.same-assets.com/2618794310/1212201608.jpeg",
    upright: "Contentment, satisfaction, gratitude, wish come true",
    reversed: "Inner happiness, materialism, dissatisfaction",
    eastern: "True contentment comes from within."
  },
  {
    id: 45,
    name: "Ten of Cups",
    category: "cups",
    keywords: "Family, harmony, happiness, perfection",
    imageUrl: "https://ext.same-assets.com/2618794310/2684258666.jpeg",
    upright: "Divine love, blissful relationships, harmony",
    reversed: "Disconnection, misaligned values, struggling relationship",
    eastern: "The rainbow of fulfilled emotional life."
  },
  {
    id: 46,
    name: "Page of Cups",
    category: "cups",
    keywords: "Emotion, intuition, creativity, sensitivity",
    imageUrl: "https://ext.same-assets.com/2618794310/1372008568.jpeg",
    upright: "Creative opportunities, intuitive messages, curiosity",
    reversed: "New ideas, doubting intuition, creative blocks",
    eastern: "Openness to emotional messages and intuition."
  },
  {
    id: 47,
    name: "Knight of Cups",
    category: "cups",
    keywords: "Romance, idealism, imagination, emotional expression",
    imageUrl: "https://ext.same-assets.com/2618794310/1330902637.jpeg",
    upright: "Romance, charm, creativity, imagination",
    reversed: "Overactive imagination, unrealistic, jealousy",
    eastern: "The romantic seeker following their heart."
  },
  {
    id: 48,
    name: "Queen of Cups",
    category: "cups",
    keywords: "Compassion, intuition, emotion, nurturing",
    imageUrl: "https://ext.same-assets.com/2618794310/3971482696.jpeg",
    upright: "Compassion, calm, comfort, nurturing",
    reversed: "Inner feelings, self-care, self-love",
    eastern: "The nurturing embrace of unconditional love."
  },
  {
    id: 49,
    name: "King of Cups",
    category: "cups",
    keywords: "Emotional maturity, leadership, compassion, balance",
    imageUrl: "https://ext.same-assets.com/2618794310/1234383569.jpeg",
    upright: "Emotionally balanced, compassionate, diplomatic",
    reversed: "Self-compassion, inner feelings, moodiness",
    eastern: "Mastery over emotions brings wisdom and peace."
  },
  // Swords
  {
    id: 50,
    name: "Ace of Swords",
    category: "swords",
    keywords: "Thought, communication, truth, breakthrough",
    imageUrl: "https://ext.same-assets.com/2618794310/389613862.jpeg",
    upright: "Breakthroughs, new ideas, mental clarity, success",
    reversed: "Inner clarity, re-thinking an idea, clouded judgement",
    eastern: "The sword of truth cuts through illusion."
  },
  {
    id: 51,
    name: "Two of Swords",
    category: "swords",
    keywords: "Hesitation, balance, choice, stalemate",
    imageUrl: "https://ext.same-assets.com/2618794310/2590486378.jpeg",
    upright: "Difficult decisions, weighing up options, stalemate",
    reversed: "Indecision, confusion, information overload",
    eastern: "Balance between heart and mind in decision."
  },
  {
    id: 52,
    name: "Three of Swords",
    category: "swords",
    keywords: "Pain, sadness, heartbreak, conflict",
    imageUrl: "https://ext.same-assets.com/2618794310/796967932.jpeg",
    upright: "Heartbreak, emotional pain, sorrow, grief",
    reversed: "Negative self-talk, releasing pain, optimism",
    eastern: "Through pain, we learn compassion for all beings."
  },
  {
    id: 53,
    name: "Four of Swords",
    category: "swords",
    keywords: "Rest, meditation, reflection, recovery",
    imageUrl: "https://ext.same-assets.com/2618794310/3877715051.jpeg",
    upright: "Rest, relaxation, meditation, contemplation",
    reversed: "Exhaustion, burn-out, deep contemplation",
    eastern: "Rest is essential for the warrior's spirit."
  },
  {
    id: 54,
    name: "Five of Swords",
    category: "swords",
    keywords: "Conflict, competition, victory, sacrifice",
    imageUrl: "https://ext.same-assets.com/2618794310/354756656.jpeg",
    upright: "Conflict, disagreements, competition, defeat",
    reversed: "Reconciliation, making amends, past resentment",
    eastern: "Victory at all costs may leave you with nothing."
  },
  {
    id: 55,
    name: "Six of Swords",
    category: "swords",
    keywords: "Transition, movement, healing, progress",
    imageUrl: "https://ext.same-assets.com/2618794310/3292037747.jpeg",
    upright: "Transition, change, rite of passage, releasing baggage",
    reversed: "Personal transition, resistance to change",
    eastern: "Moving toward calmer waters with wisdom."
  },
  {
    id: 56,
    name: "Seven of Swords",
    category: "swords",
    keywords: "Strategy, cunning, deception, secrecy",
    imageUrl: "https://ext.same-assets.com/2618794310/1395044309.jpeg",
    upright: "Betrayal, deception, getting away with something",
    reversed: "Imposter syndrome, self-deceit, keeping secrets",
    eastern: "Cleverness without wisdom leads to trouble."
  },
  {
    id: 57,
    name: "Eight of Swords",
    category: "swords",
    keywords: "Restriction, bondage, fear, predicament",
    imageUrl: "https://ext.same-assets.com/2618794310/17048538.jpeg",
    upright: "Negative thoughts, self-imposed restriction, victim mentality",
    reversed: "Self-limiting beliefs, inner critic, releasing negative patterns",
    eastern: "The prison of the mind can be escaped through awareness."
  },
  {
    id: 58,
    name: "Nine of Swords",
    category: "swords",
    keywords: "Anxiety, fear, nightmares, worry",
    imageUrl: "https://ext.same-assets.com/2618794310/1222711066.jpeg",
    upright: "Anxiety, worry, fear, depression, nightmares",
    reversed: "Inner turmoil, deep-seated fears, secrets",
    eastern: "Fear is often greater than the reality it imagines."
  },
  {
    id: 59,
    name: "Ten of Swords",
    category: "swords",
    keywords: "Ending, pain, failure, new beginning",
    imageUrl: "https://ext.same-assets.com/2618794310/2750576332.jpeg",
    upright: "Painful endings, deep wounds, betrayal, loss",
    reversed: "Recovery, regeneration, resisting an inevitable end",
    eastern: "The darkest hour comes before the dawn."
  },
  {
    id: 60,
    name: "Page of Swords",
    category: "swords",
    keywords: "Curiosity, learning, communication, wit",
    imageUrl: "https://ext.same-assets.com/2618794310/3267954128.jpeg",
    upright: "New ideas, curiosity, thirst for knowledge, new communication",
    reversed: "Self-expression, all talk and no action, hurtful words",
    eastern: "The eager student thirsting for knowledge."
  },
  {
    id: 61,
    name: "Knight of Swords",
    category: "swords",
    keywords: "Action, agility, decisiveness, conflict",
    imageUrl: "https://ext.same-assets.com/2618794310/1594391271.jpeg",
    upright: "Ambitious, action-oriented, driven to succeed, fast-thinking",
    reversed: "Restless, unfocused, burnout, headstrong",
    eastern: "Swift action must be balanced with wisdom."
  },
  {
    id: 62,
    name: "Queen of Swords",
    category: "swords",
    keywords: "Wisdom, independence, rationality, communication",
    imageUrl: "https://ext.same-assets.com/2618794310/3413914131.jpeg",
    upright: "Independence, unbiased judgement, clear boundaries",
    reversed: "Overly-emotional, easily influenced, bitchy",
    eastern: "Clear perception that sees beyond illusion."
  },
  {
    id: 63,
    name: "King of Swords",
    category: "swords",
    keywords: "Authority, justice, wisdom, leadership",
    imageUrl: "https://ext.same-assets.com/2618794310/680141924.jpeg",
    upright: "Mental clarity, intellectual power, authority, truth",
    reversed: "Inner truth, misuse of power, manipulation",
    eastern: "The wise ruler who judges with fairness and clarity."
  },
  // Pentacles
  {
    id: 64,
    name: "Ace of Pentacles",
    category: "pentacles",
    keywords: "Wealth, prosperity, opportunity, material success",
    imageUrl: "https://ext.same-assets.com/2618794310/1343224792.jpeg",
    upright: "New financial opportunity, manifestation, abundance",
    reversed: "Lost opportunity, lack of planning, security",
    eastern: "The seed of material abundance is planted."
  },
  {
    id: 65,
    name: "Two of Pentacles",
    category: "pentacles",
    keywords: "Balance, flexibility, financial management, multitasking",
    imageUrl: "https://ext.same-assets.com/2618794310/282208231.jpeg",
    upright: "Multiple priorities, time management, prioritization",
    reversed: "Over-committed, disorganization, reprioritization",
    eastern: "Dancing with the flow of changing circumstances."
  },
  {
    id: 66,
    name: "Three of Pentacles",
    category: "pentacles",
    keywords: "Cooperation, teamwork, skill, achievement",
    imageUrl: "https://ext.same-assets.com/2618794310/60147491.jpeg",
    upright: "Teamwork, collaboration, learning, implementation",
    reversed: "Disharmony, misalignment, working alone",
    eastern: "Mastery grows through dedicated practice and collaboration."
  },
  {
    id: 67,
    name: "Four of Pentacles",
    category: "pentacles",
    keywords: "Conservative, security, control, saving",
    imageUrl: "https://ext.same-assets.com/2618794310/3776370956.jpeg",
    upright: "Saving money, security, conservatism, scarcity",
    reversed: "Over-spending, greed, self-protection",
    eastern: "Holding too tightly prevents the flow of abundance."
  },
  {
    id: 68,
    name: "Five of Pentacles",
    category: "pentacles",
    keywords: "Poverty, difficulty, struggle, limitation",
    imageUrl: "https://ext.same-assets.com/2618794310/2739515711.jpeg",
    upright: "Financial loss, poverty, lack mindset, isolation",
    reversed: "Recovery from financial loss, spiritual poverty",
    eastern: "Even in hardship, there is support if we look for it."
  },
  {
    id: 69,
    name: "Six of Pentacles",
    category: "pentacles",
    keywords: "Giving, receiving, charity, balance",
    imageUrl: "https://ext.same-assets.com/2618794310/3592873311.jpeg",
    upright: "Giving, receiving, sharing wealth, generosity",
    reversed: "Self-care, unpaid debts, one-sided charity",
    eastern: "Generosity flows in circles, returning to the giver."
  },
  {
    id: 70,
    name: "Seven of Pentacles",
    category: "pentacles",
    keywords: "Patience, investment, harvest, planning",
    imageUrl: "https://ext.same-assets.com/2618794310/3280572837.jpeg",
    upright: "Long-term view, sustainable results, perseverance",
    reversed: "Lack of long-term vision, limited success",
    eastern: "Patient cultivation brings abundant harvest."
  },
  {
    id: 71,
    name: "Eight of Pentacles",
    category: "pentacles",
    keywords: "Diligence, focus, skill, achievement",
    imageUrl: "https://ext.same-assets.com/2618794310/23217757.jpeg",
    upright: "Apprenticeship, repetitive tasks, mastery, skill development",
    reversed: "Self-development, perfectionism, misdirected activity",
    eastern: "Through dedicated practice, mastery is achieved."
  },
  {
    id: 72,
    name: "Nine of Pentacles",
    category: "pentacles",
    keywords: "Success, abundance, independence, confidence",
    imageUrl: "https://ext.same-assets.com/2618794310/1557119712.jpeg",
    upright: "Abundance, luxury, self-sufficiency, financial independence",
    reversed: "Self-worth, over-investment in work, hustling",
    eastern: "Enjoying the fruits of your labor with gratitude."
  },
  {
    id: 73,
    name: "Ten of Pentacles",
    category: "pentacles",
    keywords: "Wealth, family, legacy, stability",
    imageUrl: "https://ext.same-assets.com/2618794310/408135939.jpeg",
    upright: "Wealth, financial security, family, long-term success",
    reversed: "The dark side of wealth, financial failure",
    eastern: "Lasting prosperity that benefits future generations."
  },
  {
    id: 74,
    name: "Page of Pentacles",
    category: "pentacles",
    keywords: "Learning, practice, financial management, responsibility",
    imageUrl: "https://ext.same-assets.com/2618794310/1709741478.jpeg",
    upright: "Manifestation, financial opportunity, skill development",
    reversed: "Lack of progress, procrastination, learning from failure",
    eastern: "The diligent student of material wisdom."
  },
  {
    id: 75,
    name: "Knight of Pentacles",
    category: "pentacles",
    keywords: "Diligence, reliability, goals, practicality",
    imageUrl: "https://ext.same-assets.com/2618794310/4266169231.jpeg",
    upright: "Hard work, productivity, routine, conservatism",
    reversed: "Self-discipline, boredom, perfectionism",
    eastern: "Steady progress through persistent effort."
  },
  {
    id: 76,
    name: "Queen of Pentacles",
    category: "pentacles",
    keywords: "Abundance, nurturing, practicality, generosity",
    imageUrl: "https://ext.same-assets.com/2618794310/4191357970.jpeg",
    upright: "Nurturing, practical, providing financially, working parent",
    reversed: "Financial independence, self-care, work-home conflict",
    eastern: "Nurturing abundance that supports all of life."
  },
  {
    id: 77,
    name: "King of Pentacles",
    category: "pentacles",
    keywords: "Success, authority, practicality, leadership",
    imageUrl: "https://ext.same-assets.com/2618794310/2955514101.jpeg",
    upright: "Wealth, business, leadership, security, discipline",
    reversed: "Financially inept, obsessed with wealth and status",
    eastern: "Wise stewardship of material resources."
  }
];
