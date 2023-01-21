using Newtonsoft.Json;

namespace Weather_Application;

public class CityDetail
{
    public CityDetail(Location location, Current current)
    {
        Location = location;
        Current = current;
    }

    [JsonProperty("location")] public Location Location { get; set; }

    [JsonProperty("current")] public Current Current { get; set; }
}