using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Weather_Application.Controllers
{
    [ApiController]
    [Route("[controller]")] // api/city[]
    public class CityController : ControllerBase
    {
        private readonly ILogger<CityController> _logger;
        private readonly IConfiguration _configuration;
        private readonly string _baseUrl = "http://api.weatherapi.com/v1/";

        public CityController(ILogger<CityController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
        }

        [HttpGet("get/{cityName}")]
        public IEnumerable<City> Get(string cityName)
        {
            // Fetch Details from the api:
            var client = new HttpClient();
            
            // Get the response
            var response = client.GetAsync($"{_baseUrl}search.json?key={_configuration["ApiKey"]}&q={cityName}").Result;
            
            // Parse the response
            var result = response.Content.ReadAsStringAsync().Result;
            
            // Deserialize
            var cities = JsonConvert.DeserializeObject<List<City>>(result);

            return cities ?? new List<City>();
        }
    }
}