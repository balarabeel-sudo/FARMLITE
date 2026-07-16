import QuickActionCard from "./QuickActionCard";

function QuickActions() {
  return (
    <section style={{ padding: "20px" }}>
      <QuickActionCard
        icon="🤖"
        title="FarmBot AI"
        subtitle="Your smart farming assistant (Coming Soon)"
      />

      <QuickActionCard
        icon="🛒"
        title="Marketplace"
        subtitle="Buy and sell agricultural products."
      />

      <QuickActionCard
        icon="👥"
        title="Communities"
        subtitle="Join farming communities worldwide."
      />

      <QuickActionCard
        icon="🏢"
        title="Companies"
        subtitle="Connect with agribusiness companies."
      />
    </section>
  );
}

export default QuickActions;
