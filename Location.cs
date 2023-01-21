using Newtonsoft.Json;

namespace Weather_Application;

public class Location
{
    public Location(string name, string region, string country, float lat, float lon, string tzId, int localtimeEpoch,
        string localtime)
    {
        Name = name;
        Region = region;
        Country = country;
        Lat = lat;
        Lon = lon;
        TzId = tzId;
        LocaltimeEpoch = localtimeEpoch;
        Localtime = localtime;
    }

    public required string Name { get; set; }
    public string Region { get; set; }
    public string Country { get; set; }
    public float Lat { get; set; }
    public float Lon { get; set; }

    [JsonProperty("tz_id")] public string TzId { get; set; }

    [JsonProperty("localtime_epoch")] public int LocaltimeEpoch { get; set; }

    public string Localtime { get; set; }
}