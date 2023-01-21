using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Weather_Application.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CityDetailController : ControllerBase
    {
        private readonly ILogger<CityDetailController> _logger;
        private readonly IConfiguration _configuration;
        private readonly string _baseUrl = "http://api.weatherapi.com/v1/";

        public CityDetailController(ILogger<CityDetail> logger, IConfiguration configuration, ILogger<CityDetailController> logger1)
        {
            _configuration = configuration;
            _logger = logger1;
        }
        
        [HttpGet("get/{cityName}")]
        public IActionResult Get(string cityName)
        {
            // Fetch Details from the api:
            // Create Http Client
            var client = new HttpClient();
            
            // Get the response
            var response = client.GetAsync($"{_baseUrl}current.json?key={_configuration["ApiKey"]}&q={cityName}").Result;
            
            // Parse the response
            var result = response.Content.ReadAsStringAsync().Result;
            
            // Deserialize
            var cityDetail = JsonConvert.DeserializeObject<CityDetail>(result);
            
            return Ok(cityDetail);
        }
    }
}

