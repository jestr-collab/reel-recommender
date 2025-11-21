import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const profiles = [
  { id: 1, name: "Alex", color: "bg-red-500", initials: "AL" },
  { id: 2, name: "Jordan", color: "bg-blue-500", initials: "JO" },
  { id: 3, name: "Sam", color: "bg-green-500", initials: "SA" },
  { id: 4, name: "Taylor", color: "bg-purple-500", initials: "TA" },
];

const ProfileSelection = () => {
  const navigate = useNavigate();

  const handleProfileClick = (profileId: number) => {
    navigate("/browse");
  };

  const handleGuestMode = () => {
    navigate("/browse");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2">
          Who's watching?
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
        {profiles.map((profile) => (
          <button
            key={profile.id}
            onClick={() => handleProfileClick(profile.id)}
            className="flex flex-col items-center gap-3 group cursor-pointer transition-transform hover:scale-110"
          >
            <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-transparent group-hover:border-foreground transition-all">
              <AvatarFallback className={`${profile.color} text-2xl md:text-3xl font-semibold text-white`}>
                {profile.initials}
              </AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground group-hover:text-foreground text-lg md:text-xl font-medium transition-colors">
              {profile.name}
            </span>
          </button>
        ))}
      </div>

      <Button
        onClick={handleGuestMode}
        variant="outline"
        className="mt-8 text-lg px-8 py-6"
      >
        Continue as Guest
      </Button>
    </div>
  );
};

export default ProfileSelection;
