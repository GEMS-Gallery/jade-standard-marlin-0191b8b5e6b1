import Bool "mo:base/Bool";
import Text "mo:base/Text";

import Debug "mo:base/Debug";

actor {
  public query func greet(name : Text) : async Text {
    Debug.print("Greeting: " # name);
    return "Hello, " # name # "!";
  };

  public query func healthCheck() : async Bool {
    Debug.print("Health check called");
    return true;
  };
}
