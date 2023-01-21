using Newtonsoft.Json;

namespace Weather_Application;

public class Current
{
    public Current(int lastUpdatedEpoch, string lastUpdated, float tempC, float tempF, int isDay, Condition condition,
        float windMph, float windKph, int windDegree, string windDir, float pressureIn, float precipMm, int humidity,
        int cloud, float feelslikeC, float feelslikeF, float visKm, float visMiles, float uv, float gustMph,
        float gustKph, AirQuality airQuality)
    {
        LastUpdatedEpoch = lastUpdatedEpoch;
        LastUpdated = lastUpdated;
        TempC = tempC;
        TempF = tempF;
        IsDay = isDay;
        Condition = condition;
        WindMph = windMph;
        WindKph = windKph;
        WindDegree = windDegree;
        WindDir = windDir;
        PressureIn = pressureIn;
        PrecipMm = precipMm;
        Humidity = humidity;
        Cloud = cloud;
        FeelslikeC = feelslikeC;
        FeelslikeF = feelslikeF;
        VisKm = visKm;
        VisMiles = visMiles;
        Uv = uv;
        GustMph = gustMph;
        GustKph = gustKph;
        AirQuality = airQuality;
    }

    [JsonProperty("last_updated_epoch")] public int LastUpdatedEpoch { get; set; }

    [JsonProperty("last_updated")] public string LastUpdated { get; set; }

    [JsonProperty("temp_c")] public float TempC { get; set; }

    [JsonProperty("temp_f")] public float TempF { get; set; }

    [JsonProperty("is_day")] public int IsDay { get; set; }

    [JsonProperty("condition")] public Condition Condition { get; set; }

    [JsonProperty("wind_mph")] public float WindMph { get; set; }

    [JsonProperty("wind_kph")] public float WindKph { get; set; }

    [JsonProperty("wind_degree")] public int WindDegree { get; set; }

    [JsonProperty("wind_dir")] public string WindDir { get; set; }

    [JsonProperty("pressure_in")] public float PressureIn { get; set; }

    [JsonProperty("prescip_mm")] public float PrecipMm { get; set; }

    [JsonProperty("precip_in")] public float PrecipIn { get; set; }

    [JsonProperty("humidity")] public int Humidity { get; set; }

    [JsonProperty("cloud")] public int Cloud { get; set; }

    [JsonProperty("feelslike_c")] public float FeelslikeC { get; set; }

    [JsonProperty("feelslike_f")] public float FeelslikeF { get; set; }

    [JsonProperty("vis_km")] public float VisKm { get; set; }

    [JsonProperty("vis_miles")] public float VisMiles { get; set; }

    [JsonProperty("uv")] public float Uv { get; set; }

    [JsonProperty("gust_mph")] public float GustMph { get; set; }

    [JsonProperty("gust_kph")] public float GustKph { get; set; }

    [JsonProperty("air_quality")] public AirQuality AirQuality { get; set; }
}