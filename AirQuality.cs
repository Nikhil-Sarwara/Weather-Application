using Newtonsoft.Json;

namespace Weather_Application;

public class AirQuality
{
    public AirQuality(float co, float no2, float o3, float so2, float pm25, float pm10, int usEpaIndex,
        int gbDefraIndex)
    {
        Co = co;
        No2 = no2;
        O3 = o3;
        So2 = so2;
        Pm25 = pm25;
        Pm10 = pm10;
        UsEpaIndex = usEpaIndex;
        GbDefraIndex = gbDefraIndex;
    }

    [JsonProperty("co")] public float Co { get; set; }

    [JsonProperty("no2")] public float No2 { get; set; }

    [JsonProperty("o3")] public float O3 { get; set; }

    [JsonProperty("so2")] public float So2 { get; set; }

    [JsonProperty("pm2_5")] public float Pm25 { get; set; }

    [JsonProperty("pm10")] public float Pm10 { get; set; }

    [JsonProperty("us-epa-index")] public int UsEpaIndex { get; set; }

    [JsonProperty("gb-defra-index")] public int GbDefraIndex { get; set; }
}